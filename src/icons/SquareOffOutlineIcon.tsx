import React, { FC, memo } from "react";
import SquareOffOutlineSvg from "../svg/square-off-outline.svg";

export interface ISquareOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareOffOutlineIcon: FC<ISquareOffOutlineIconProps> = memo(
  props => <SquareOffOutlineSvg {...props} />,
);
