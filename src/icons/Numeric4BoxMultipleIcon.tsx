import React, { FC, memo } from "react";
import Numeric4BoxMultipleSvg from "../svg/numeric-4-box-multiple.svg";

export interface INumeric4BoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric4BoxMultipleIcon: FC<INumeric4BoxMultipleIconProps> = memo(
  props => <Numeric4BoxMultipleSvg {...props} />,
);
