import React, { FC, memo } from "react";
import CarLightHighSvg from "../svg/car-light-high.svg";

export interface ICarLightHighIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarLightHighIcon: FC<ICarLightHighIconProps> = memo(props => (
  <CarLightHighSvg {...props} />
));
