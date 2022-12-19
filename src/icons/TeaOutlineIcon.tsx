import React, { FC, memo } from "react";
import TeaOutlineSvg from "../svg/tea-outline.svg";

export interface ITeaOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TeaOutlineIcon: FC<ITeaOutlineIconProps> = memo(props => (
  <TeaOutlineSvg {...props} />
));
