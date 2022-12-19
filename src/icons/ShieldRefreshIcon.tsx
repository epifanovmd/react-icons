import React, { FC, memo } from "react";
import ShieldRefreshSvg from "../svg/shield-refresh.svg";

export interface IShieldRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldRefreshIcon: FC<IShieldRefreshIconProps> = memo(props => (
  <ShieldRefreshSvg {...props} />
));
