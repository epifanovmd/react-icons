import React, { FC, memo } from "react";
import Numeric7CircleSvg from "../svg/numeric-7-circle.svg";

export interface INumeric7CircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric7CircleIcon: FC<INumeric7CircleIconProps> = memo(props => (
  <Numeric7CircleSvg {...props} />
));
