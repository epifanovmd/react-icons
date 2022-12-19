import React, { FC, memo } from "react";
import LanConnectSvg from "../svg/lan-connect.svg";

export interface ILanConnectIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanConnectIcon: FC<ILanConnectIconProps> = memo(props => (
  <LanConnectSvg {...props} />
));
