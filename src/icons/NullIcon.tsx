import React, { FC, memo } from "react";
import NullSvg from "../svg/null.svg";

export interface INullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NullIcon: FC<INullIconProps> = memo(props => (
  <NullSvg {...props} />
));
