import React, { FC, memo } from "react";
import EyedropperMinusSvg from "../svg/eyedropper-minus.svg";

export interface IEyedropperMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyedropperMinusIcon: FC<IEyedropperMinusIconProps> = memo(
  props => <EyedropperMinusSvg {...props} />,
);
