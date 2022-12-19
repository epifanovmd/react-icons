import React, { FC, memo } from "react";
import ClipboardCheckMultipleSvg from "../svg/clipboard-check-multiple.svg";

export interface IClipboardCheckMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ClipboardCheckMultipleIcon: FC<IClipboardCheckMultipleIconProps> =
  memo(props => <ClipboardCheckMultipleSvg {...props} />);
