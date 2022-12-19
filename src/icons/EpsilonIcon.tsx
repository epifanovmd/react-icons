import React, { FC, memo } from "react";
import EpsilonSvg from "../svg/epsilon.svg";

export interface IEpsilonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EpsilonIcon: FC<IEpsilonIconProps> = memo(props => (
  <EpsilonSvg {...props} />
));
