import React, { FC, memo } from "react";
import SkateboardingSvg from "../svg/skateboarding.svg";

export interface ISkateboardingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkateboardingIcon: FC<ISkateboardingIconProps> = memo(props => (
  <SkateboardingSvg {...props} />
));
