import React, { FC, memo } from "react";
import PuzzleSvg from "../svg/puzzle.svg";

export interface IPuzzleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleIcon: FC<IPuzzleIconProps> = memo(props => (
  <PuzzleSvg {...props} />
));
