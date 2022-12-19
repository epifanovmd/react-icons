import React, { FC, memo } from "react";
import ControllerOffSvg from "../svg/controller-off.svg";

export interface IControllerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ControllerOffIcon: FC<IControllerOffIconProps> = memo(props => (
  <ControllerOffSvg {...props} />
));
