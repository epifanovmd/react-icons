import React, { FC, memo } from "react";
import SelectionMultipleSvg from "../svg/selection-multiple.svg";

export interface ISelectionMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectionMultipleIcon: FC<ISelectionMultipleIconProps> = memo(
  props => <SelectionMultipleSvg {...props} />,
);
