import React, { FC, memo } from "react";
import TimerMinusSvg from "../svg/timer-minus.svg";

export interface ITimerMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimerMinusIcon: FC<ITimerMinusIconProps> = memo(props => (
  <TimerMinusSvg {...props} />
));
