import React, { FC, memo } from "react";
import HomeClockOutlineSvg from "../svg/home-clock-outline.svg";

export interface IHomeClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeClockOutlineIcon: FC<IHomeClockOutlineIconProps> = memo(
  props => <HomeClockOutlineSvg {...props} />,
);
