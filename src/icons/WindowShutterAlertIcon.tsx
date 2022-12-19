import React, { FC, memo } from "react";
import WindowShutterAlertSvg from "../svg/window-shutter-alert.svg";

export interface IWindowShutterAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WindowShutterAlertIcon: FC<IWindowShutterAlertIconProps> = memo(
  props => <WindowShutterAlertSvg {...props} />,
);
