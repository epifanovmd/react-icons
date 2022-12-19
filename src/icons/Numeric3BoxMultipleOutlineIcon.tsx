import React, { FC, memo } from "react";
import Numeric3BoxMultipleOutlineSvg from "../svg/numeric-3-box-multiple-outline.svg";

export interface INumeric3BoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric3BoxMultipleOutlineIcon: FC<INumeric3BoxMultipleOutlineIconProps> =
  memo(props => <Numeric3BoxMultipleOutlineSvg {...props} />);
