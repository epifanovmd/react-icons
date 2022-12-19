import React, { FC, memo } from "react";
import StarFourPointsOutlineSvg from "../svg/star-four-points-outline.svg";

export interface IStarFourPointsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StarFourPointsOutlineIcon: FC<IStarFourPointsOutlineIconProps> =
  memo(props => <StarFourPointsOutlineSvg {...props} />);
