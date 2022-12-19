import React, { FC, memo } from "react";
import MicrophoneMessageOffSvg from "../svg/microphone-message-off.svg";

export interface IMicrophoneMessageOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrophoneMessageOffIcon: FC<IMicrophoneMessageOffIconProps> =
  memo(props => <MicrophoneMessageOffSvg {...props} />);
