import React, { FC, memo } from "react";
import Timer3Svg from "../svg/timer-3.svg";

export interface ITimer3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Timer3Icon: FC<ITimer3IconProps> = memo(props => (
  <Timer3Svg {...props} />
));
