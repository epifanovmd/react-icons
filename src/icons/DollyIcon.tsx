import React, { FC, memo } from "react";
import DollySvg from "../svg/dolly.svg";

export interface IDollyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DollyIcon: FC<IDollyIconProps> = memo(props => (
  <DollySvg {...props} />
));
