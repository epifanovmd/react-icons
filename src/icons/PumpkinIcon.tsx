import React, { FC, memo } from "react";
import PumpkinSvg from "../svg/pumpkin.svg";

export interface IPumpkinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PumpkinIcon: FC<IPumpkinIconProps> = memo(props => (
  <PumpkinSvg {...props} />
));
