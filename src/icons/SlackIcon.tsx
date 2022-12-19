import React, { FC, memo } from "react";
import SlackSvg from "../svg/slack.svg";

export interface ISlackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SlackIcon: FC<ISlackIconProps> = memo(props => (
  <SlackSvg {...props} />
));
