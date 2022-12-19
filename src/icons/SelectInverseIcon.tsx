import React, { FC, memo } from "react";
import SelectInverseSvg from "../svg/select-inverse.svg";

export interface ISelectInverseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectInverseIcon: FC<ISelectInverseIconProps> = memo(props => (
  <SelectInverseSvg {...props} />
));
