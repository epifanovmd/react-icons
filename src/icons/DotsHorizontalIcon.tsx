import React, { FC, memo } from "react";
import DotsHorizontalSvg from "../svg/dots-horizontal.svg";

export interface IDotsHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DotsHorizontalIcon: FC<IDotsHorizontalIconProps> = memo(props => (
  <DotsHorizontalSvg {...props} />
));
