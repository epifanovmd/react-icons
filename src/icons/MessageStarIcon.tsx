import React, { FC, memo } from "react";
import MessageStarSvg from "../svg/message-star.svg";

export interface IMessageStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageStarIcon: FC<IMessageStarIconProps> = memo(props => (
  <MessageStarSvg {...props} />
));
