import React, { FC, memo } from "react";
import CogClockwiseSvg from "../svg/cog-clockwise.svg";

export interface ICogClockwiseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogClockwiseIcon: FC<ICogClockwiseIconProps> = memo(props => (
  <CogClockwiseSvg {...props} />
));
