import React, { FC, memo } from "react";
import PhoneMissedSvg from "../svg/phone-missed.svg";

export interface IPhoneMissedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneMissedIcon: FC<IPhoneMissedIconProps> = memo(props => (
  <PhoneMissedSvg {...props} />
));
