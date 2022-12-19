import React, { FC, memo } from "react";
import ValveClosedSvg from "../svg/valve-closed.svg";

export interface IValveClosedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ValveClosedIcon: FC<IValveClosedIconProps> = memo(props => (
  <ValveClosedSvg {...props} />
));
