import React, { FC, memo } from "react";
import BorderLeftVariantSvg from "../svg/border-left-variant.svg";

export interface IBorderLeftVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderLeftVariantIcon: FC<IBorderLeftVariantIconProps> = memo(
  props => <BorderLeftVariantSvg {...props} />,
);
