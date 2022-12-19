import React, { FC, memo } from "react";
import PuzzleCheckSvg from "../svg/puzzle-check.svg";

export interface IPuzzleCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleCheckIcon: FC<IPuzzleCheckIconProps> = memo(props => (
  <PuzzleCheckSvg {...props} />
));
