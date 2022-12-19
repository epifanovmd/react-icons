import React, { FC, memo } from "react";
import FileDocumentArrowRightSvg from "../svg/file-document-arrow-right.svg";

export interface IFileDocumentArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileDocumentArrowRightIcon: FC<IFileDocumentArrowRightIconProps> =
  memo(props => <FileDocumentArrowRightSvg {...props} />);
