import React, { FC, memo } from "react";
import Numeric3BoxMultipleSvg from "../svg/numeric-3-box-multiple.svg";

export interface INumeric3BoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric3BoxMultipleIcon: FC<INumeric3BoxMultipleIconProps> = memo(
  props => <Numeric3BoxMultipleSvg {...props} />,
);
