import React, { FC, memo } from "react";
import WeatherRainySvg from "../svg/weather-rainy.svg";

export interface IWeatherRainyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherRainyIcon: FC<IWeatherRainyIconProps> = memo(props => (
  <WeatherRainySvg {...props} />
));
