import React, { FC, memo } from "react";
import ConsoleNetworkOutlineSvg from "../svg/console-network-outline.svg";

export interface IConsoleNetworkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ConsoleNetworkOutlineIcon: FC<IConsoleNetworkOutlineIconProps> =
  memo(props => <ConsoleNetworkOutlineSvg {...props} />);
