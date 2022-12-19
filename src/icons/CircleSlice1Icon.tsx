import React, { FC, memo } from "react";
import CircleSlice1Svg from "../svg/circle-slice-1.svg";

export interface ICircleSlice1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleSlice1Icon: FC<ICircleSlice1IconProps> = memo(props => (
  <CircleSlice1Svg {...props} />
));
