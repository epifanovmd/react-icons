import React, { FC, memo } from "react";
import AirHumidifierSvg from "../svg/air-humidifier.svg";

export interface IAirHumidifierIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirHumidifierIcon: FC<IAirHumidifierIconProps> = memo(props => (
  <AirHumidifierSvg {...props} />
));
