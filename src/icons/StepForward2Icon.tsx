import React, { FC, memo } from "react";
import StepForward2Svg from "../svg/step-forward-2.svg";

export interface IStepForward2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StepForward2Icon: FC<IStepForward2IconProps> = memo(props => (
  <StepForward2Svg {...props} />
));
