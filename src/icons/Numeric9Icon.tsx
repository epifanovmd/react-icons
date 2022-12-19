import React, { FC, memo } from "react";
import Numeric9Svg from "../svg/numeric-9.svg";

export interface INumeric9IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Numeric9Icon: FC<INumeric9IconProps> = memo(props => (
  <Numeric9Svg {...props} />
));
