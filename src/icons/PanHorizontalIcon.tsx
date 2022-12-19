import React, { FC, memo } from "react";
import PanHorizontalSvg from "../svg/pan-horizontal.svg";

export interface IPanHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PanHorizontalIcon: FC<IPanHorizontalIconProps> = memo(props => (
  <PanHorizontalSvg {...props} />
));
