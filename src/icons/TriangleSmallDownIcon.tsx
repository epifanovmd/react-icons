import React, { FC, memo } from "react";
import TriangleSmallDownSvg from "../svg/triangle-small-down.svg";

export interface ITriangleSmallDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TriangleSmallDownIcon: FC<ITriangleSmallDownIconProps> = memo(
  props => <TriangleSmallDownSvg {...props} />,
);
