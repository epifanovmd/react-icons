import React, { FC, memo } from "react";
import MessageMinusSvg from "../svg/message-minus.svg";

export interface IMessageMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageMinusIcon: FC<IMessageMinusIconProps> = memo(props => (
  <MessageMinusSvg {...props} />
));
