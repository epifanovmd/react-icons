import React, { FC, memo } from "react";
import CarSpeedLimiterSvg from "../svg/car-speed-limiter.svg";

export interface ICarSpeedLimiterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarSpeedLimiterIcon: FC<ICarSpeedLimiterIconProps> = memo(
  props => <CarSpeedLimiterSvg {...props} />,
);
