import React, { FC, memo } from "react";
import Numeric10CircleOutlineSvg from "../svg/numeric-10-circle-outline.svg";

export interface INumeric10CircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric10CircleOutlineIcon: FC<INumeric10CircleOutlineIconProps> =
  memo(props => <Numeric10CircleOutlineSvg {...props} />);
