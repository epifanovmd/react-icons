import React, { FC, memo } from "react";
import NotebookPlusSvg from "../svg/notebook-plus.svg";

export interface INotebookPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NotebookPlusIcon: FC<INotebookPlusIconProps> = memo(props => (
  <NotebookPlusSvg {...props} />
));
