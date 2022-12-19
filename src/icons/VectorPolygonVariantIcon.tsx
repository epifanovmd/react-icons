import React, { FC, memo } from "react";
import VectorPolygonVariantSvg from "../svg/vector-polygon-variant.svg";

export interface IVectorPolygonVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorPolygonVariantIcon: FC<IVectorPolygonVariantIconProps> =
  memo(props => <VectorPolygonVariantSvg {...props} />);
