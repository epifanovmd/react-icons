import React, { FC, memo } from "react";
import UmbrellaBeachSvg from "../svg/umbrella-beach.svg";

export interface IUmbrellaBeachIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UmbrellaBeachIcon: FC<IUmbrellaBeachIconProps> = memo(props => (
  <UmbrellaBeachSvg {...props} />
));
