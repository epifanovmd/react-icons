import React, { FC, memo } from "react";
import SleepOffSvg from "../svg/sleep-off.svg";

export interface ISleepOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SleepOffIcon: FC<ISleepOffIconProps> = memo(props => (
  <SleepOffSvg {...props} />
));
