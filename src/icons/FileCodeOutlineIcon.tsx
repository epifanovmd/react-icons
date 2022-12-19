import React, { FC, memo } from "react";
import FileCodeOutlineSvg from "../svg/file-code-outline.svg";

export interface IFileCodeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileCodeOutlineIcon: FC<IFileCodeOutlineIconProps> = memo(
  props => <FileCodeOutlineSvg {...props} />,
);
