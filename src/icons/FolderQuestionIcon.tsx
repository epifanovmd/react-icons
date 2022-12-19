import React, { FC, memo } from "react";
import FolderQuestionSvg from "../svg/folder-question.svg";

export interface IFolderQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FolderQuestionIcon: FC<IFolderQuestionIconProps> = memo(props => (
  <FolderQuestionSvg {...props} />
));
