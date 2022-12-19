import React, { FC, memo } from "react";
import TelevisionSpeakerSvg from "../svg/television-speaker.svg";

export interface ITelevisionSpeakerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TelevisionSpeakerIcon: FC<ITelevisionSpeakerIconProps> = memo(
  props => <TelevisionSpeakerSvg {...props} />,
);
