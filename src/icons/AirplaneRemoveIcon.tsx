import React, { FC, memo } from "react";
import AirplaneRemoveSvg from "../svg/airplane-remove.svg";

export interface IAirplaneRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneRemoveIcon: FC<IAirplaneRemoveIconProps> = memo(props => (
  <AirplaneRemoveSvg {...props} />
));
