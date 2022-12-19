import React, { FC, memo } from "react";
import RobotMowerOutlineSvg from "../svg/robot-mower-outline.svg";

export interface IRobotMowerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RobotMowerOutlineIcon: FC<IRobotMowerOutlineIconProps> = memo(
  props => <RobotMowerOutlineSvg {...props} />,
);
