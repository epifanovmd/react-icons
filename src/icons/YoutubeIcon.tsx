import React, { FC, memo } from "react";
import YoutubeSvg from "../svg/youtube.svg";

export interface IYoutubeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const YoutubeIcon: FC<IYoutubeIconProps> = memo(props => (
  <YoutubeSvg {...props} />
));
