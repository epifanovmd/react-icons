import React, { FC, memo } from "react";
import MessageCogSvg from "../svg/message-cog.svg";

export interface IMessageCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageCogIcon: FC<IMessageCogIconProps> = memo(props => (
  <MessageCogSvg {...props} />
));
