import React, { FC, memo } from "react";
import BeakerAlertOutlineSvg from "../svg/beaker-alert-outline.svg";

export interface IBeakerAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeakerAlertOutlineIcon: FC<IBeakerAlertOutlineIconProps> = memo(
  props => <BeakerAlertOutlineSvg {...props} />,
);
