import React, { FC, memo } from "react";
import FileSendSvg from "../svg/file-send.svg";

export interface IFileSendIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileSendIcon: FC<IFileSendIconProps> = memo(props => (
  <FileSendSvg {...props} />
));
