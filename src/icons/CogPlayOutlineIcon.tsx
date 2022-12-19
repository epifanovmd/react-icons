import React, { FC, memo } from "react";
import CogPlayOutlineSvg from "../svg/cog-play-outline.svg";

export interface ICogPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogPlayOutlineIcon: FC<ICogPlayOutlineIconProps> = memo(props => (
  <CogPlayOutlineSvg {...props} />
));
