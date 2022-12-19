import React, { FC, memo } from "react";
import BarnSvg from "../svg/barn.svg";

export interface IBarnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BarnIcon: FC<IBarnIconProps> = memo(props => (
  <BarnSvg {...props} />
));
