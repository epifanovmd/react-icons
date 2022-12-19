import React, { FC, memo } from "react";
import CallMadeSvg from "../svg/call-made.svg";

export interface ICallMadeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CallMadeIcon: FC<ICallMadeIconProps> = memo(props => (
  <CallMadeSvg {...props} />
));
