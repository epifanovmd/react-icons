import React, { FC, memo } from "react";
import MonitorCellphoneStarSvg from "../svg/monitor-cellphone-star.svg";

export interface IMonitorCellphoneStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorCellphoneStarIcon: FC<IMonitorCellphoneStarIconProps> =
  memo(props => <MonitorCellphoneStarSvg {...props} />);
