import React, { FC, memo } from "react";
import IslandSvg from "../svg/island.svg";

export interface IIslandIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IslandIcon: FC<IIslandIconProps> = memo(props => (
  <IslandSvg {...props} />
));
