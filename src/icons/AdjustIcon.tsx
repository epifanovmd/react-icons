import React, { FC, memo } from "react";
import AdjustSvg from "../svg/adjust.svg";

export interface IAdjustIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AdjustIcon: FC<IAdjustIconProps> = memo(props => (
  <AdjustSvg {...props} />
));
