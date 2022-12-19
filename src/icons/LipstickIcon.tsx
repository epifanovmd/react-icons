import React, { FC, memo } from "react";
import LipstickSvg from "../svg/lipstick.svg";

export interface ILipstickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LipstickIcon: FC<ILipstickIconProps> = memo(props => (
  <LipstickSvg {...props} />
));
