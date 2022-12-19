import React, { FC, memo } from "react";
import VanishQuarterSvg from "../svg/vanish-quarter.svg";

export interface IVanishQuarterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VanishQuarterIcon: FC<IVanishQuarterIconProps> = memo(props => (
  <VanishQuarterSvg {...props} />
));
