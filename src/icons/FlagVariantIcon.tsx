import React, { FC, memo } from "react";
import FlagVariantSvg from "../svg/flag-variant.svg";

export interface IFlagVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagVariantIcon: FC<IFlagVariantIconProps> = memo(props => (
  <FlagVariantSvg {...props} />
));
