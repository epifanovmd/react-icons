import React, { FC, memo } from "react";
import MovieOpenSettingsOutlineSvg from "../svg/movie-open-settings-outline.svg";

export interface IMovieOpenSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenSettingsOutlineIcon: FC<IMovieOpenSettingsOutlineIconProps> =
  memo(props => <MovieOpenSettingsOutlineSvg {...props} />);
