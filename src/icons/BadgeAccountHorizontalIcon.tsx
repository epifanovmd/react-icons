import React, { FC, memo } from "react";
import BadgeAccountHorizontalSvg from "../svg/badge-account-horizontal.svg";

export interface IBadgeAccountHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BadgeAccountHorizontalIcon: FC<IBadgeAccountHorizontalIconProps> =
  memo(props => <BadgeAccountHorizontalSvg {...props} />);
