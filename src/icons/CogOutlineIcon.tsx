import React, { FC, memo } from "react";
import CogOutlineSvg from "../svg/cog-outline.svg";

export interface ICogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogOutlineIcon: FC<ICogOutlineIconProps> = memo(props => (
  <CogOutlineSvg {...props} />
));
