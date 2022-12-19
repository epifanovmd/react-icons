import React, { FC, memo } from "react";
import RobotVacuumVariantSvg from "../svg/robot-vacuum-variant.svg";

export interface IRobotVacuumVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotVacuumVariantIcon: FC<IRobotVacuumVariantIconProps> = memo(
  props => <RobotVacuumVariantSvg {...props} />,
);
