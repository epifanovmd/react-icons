import React, { FC, memo } from "react";
import PhoneIncomingSvg from "../svg/phone-incoming.svg";

export interface IPhoneIncomingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneIncomingIcon: FC<IPhoneIncomingIconProps> = memo(props => (
  <PhoneIncomingSvg {...props} />
));
