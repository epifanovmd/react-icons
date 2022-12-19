import React, { FC, memo } from "react";
import GateSvg from "../svg/gate.svg";

export interface IGateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateIcon: FC<IGateIconProps> = memo(props => (
  <GateSvg {...props} />
));
