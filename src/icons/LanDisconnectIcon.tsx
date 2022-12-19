import React, { FC, memo } from "react";
import LanDisconnectSvg from "../svg/lan-disconnect.svg";

export interface ILanDisconnectIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanDisconnectIcon: FC<ILanDisconnectIconProps> = memo(props => (
  <LanDisconnectSvg {...props} />
));
