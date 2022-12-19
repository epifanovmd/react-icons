import React, { FC, memo } from "react";
import CellphoneSoundSvg from "../svg/cellphone-sound.svg";

export interface ICellphoneSoundIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneSoundIcon: FC<ICellphoneSoundIconProps> = memo(props => (
  <CellphoneSoundSvg {...props} />
));
