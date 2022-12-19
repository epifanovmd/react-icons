import React, { FC, memo } from "react";
import GraphSvg from "../svg/graph.svg";

export interface IGraphIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GraphIcon: FC<IGraphIconProps> = memo(props => (
  <GraphSvg {...props} />
));
