import React, { FC, memo } from "react";
import EraserVariantSvg from "../svg/eraser-variant.svg";

export interface IEraserVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EraserVariantIcon: FC<IEraserVariantIconProps> = memo(props => (
  <EraserVariantSvg {...props} />
));
