import React, { FC, memo } from "react";
import HospitalBoxSvg from "../svg/hospital-box.svg";

export interface IHospitalBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HospitalBoxIcon: FC<IHospitalBoxIconProps> = memo(props => (
  <HospitalBoxSvg {...props} />
));
