import fs from "fs";
import path from "path";
import { promisify } from "util";
import pkg from "lodash";

const {
  template,
  camelCase,
  upperFirst,
} = pkg;

const fsRm = promisify(fs.rm);
const fsAccess = promisify(fs.access);
const fsMkdir = promisify(fs.mkdir);
const fsReaddir = promisify(fs.readdir);
const fsWriteFile = promisify(fs.writeFile);

const reactIconTemplate = template(
  `${`
import React, { FC, memo } from "react";
import <%= component %> from "../svg/<%= path %>.svg";

export interface I<%= name %>Props
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const <%= name %>: FC<I<%= name %>Props> = memo(props => {
  return <<%= component %> {...props} />;
});
`.trim()}\n`,
);

const getExportString = (files, callback) => files.map(_name => {
  const name = `${upperFirst(camelCase(_name.split(".")[0]))}Icon`;

  return callback?.(name) ?? name;
});

const generateIcons = async () => {
try {
  const dirname = path.dirname("");
  const indexSrcPath = path.resolve(dirname, "src/index.ts");
  const reactIcons = path.resolve(dirname, "src/icons");
  const svgIcons = path.resolve(dirname, "src/svg");

  await fsRm(reactIcons, {
    recursive: true,
    force: true,
  });

  try {
    await promisify(fsAccess)(reactIcons).catch(() => {
      promisify(fsMkdir)(reactIcons).catch(er => {
        console.log("er", er);
      });
    });
  } catch (e) {
    console.log("e", e);
  }

  const files = await fsReaddir(svgIcons);
  const exportIconsString = getExportString(files, name => `\nexport { ${name} } from "./icons/${name}";`)
    .toString().replace(/(,|\[|\\])/g, "");

  await Promise.all(files.map(_fileName => {
    const fileName = _fileName.split(".")[0];

    if (fileName) {
      const component = upperFirst(camelCase(fileName.replace(/-/g, " ")));

      return fsWriteFile(
        `${reactIcons}/${component}Icon.tsx`,
        reactIconTemplate({
          path: fileName,
          component: `${component}Svg`,
          name: `${component}Icon`,
        }),
      );
    }

    return Promise.resolve();
  }));


  // создать экспорты всех реакт иконок src/index.ts
  await fsWriteFile(indexSrcPath, `${`${exportIconsString}`.trim()}\n`);
} catch (e) {
  console.log("ERROR", e);
}

};

generateIcons().then(() => {
  console.log("Generation icons successfully");
});
