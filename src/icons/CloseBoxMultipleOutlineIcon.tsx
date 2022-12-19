import React, { FC, memo } from "react";
import CloseBoxMultipleOutlineSvg from "../svg/close-box-multiple-outline.svg";

export interface ICloseBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseBoxMultipleOutlineIcon: FC<ICloseBoxMultipleOutlineIconProps> =
  memo(props => <CloseBoxMultipleOutlineSvg {...props} />);
