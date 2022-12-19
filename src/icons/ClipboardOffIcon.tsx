import React, { FC, memo } from "react";
import ClipboardOffSvg from "../svg/clipboard-off.svg";

export interface IClipboardOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardOffIcon: FC<IClipboardOffIconProps> = memo(props => (
  <ClipboardOffSvg {...props} />
));
