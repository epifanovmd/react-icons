import React, { FC, memo } from "react";
import FanSpeed3Svg from "../svg/fan-speed-3.svg";

export interface IFanSpeed3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanSpeed3Icon: FC<IFanSpeed3IconProps> = memo(props => (
  <FanSpeed3Svg {...props} />
));
