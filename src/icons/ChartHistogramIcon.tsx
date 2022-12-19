import React, { FC, memo } from "react";
import ChartHistogramSvg from "../svg/chart-histogram.svg";

export interface IChartHistogramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChartHistogramIcon: FC<IChartHistogramIconProps> = memo(props => (
  <ChartHistogramSvg {...props} />
));
