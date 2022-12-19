import React, { FC, memo } from "react";
import PretzelSvg from "../svg/pretzel.svg";

export interface IPretzelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PretzelIcon: FC<IPretzelIconProps> = memo(props => (
  <PretzelSvg {...props} />
));
