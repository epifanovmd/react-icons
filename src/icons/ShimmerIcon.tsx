import React, { FC, memo } from "react";
import ShimmerSvg from "../svg/shimmer.svg";

export interface IShimmerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShimmerIcon: FC<IShimmerIconProps> = memo(props => (
  <ShimmerSvg {...props} />
));
