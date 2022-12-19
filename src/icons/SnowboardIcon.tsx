import React, { FC, memo } from "react";
import SnowboardSvg from "../svg/snowboard.svg";

export interface ISnowboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnowboardIcon: FC<ISnowboardIconProps> = memo(props => (
  <SnowboardSvg {...props} />
));
