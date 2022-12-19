import React, { FC, memo } from "react";
import WifiOffSvg from "../svg/wifi-off.svg";

export interface IWifiOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WifiOffIcon: FC<IWifiOffIconProps> = memo(props => (
  <WifiOffSvg {...props} />
));
