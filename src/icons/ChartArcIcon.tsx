import React, { FC, memo } from "react";
import ChartArcSvg from "../svg/chart-arc.svg";

export interface IChartArcIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartArcIcon: FC<IChartArcIconProps> = memo(props => (
  <ChartArcSvg {...props} />
));
