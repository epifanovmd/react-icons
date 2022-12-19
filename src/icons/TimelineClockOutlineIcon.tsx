import React, { FC, memo } from "react";
import TimelineClockOutlineSvg from "../svg/timeline-clock-outline.svg";

export interface ITimelineClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TimelineClockOutlineIcon: FC<ITimelineClockOutlineIconProps> =
  memo(props => <TimelineClockOutlineSvg {...props} />);
