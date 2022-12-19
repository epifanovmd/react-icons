import React, { FC, memo } from "react";
import SelectionSearchSvg from "../svg/selection-search.svg";

export interface ISelectionSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectionSearchIcon: FC<ISelectionSearchIconProps> = memo(
  props => <SelectionSearchSvg {...props} />,
);
