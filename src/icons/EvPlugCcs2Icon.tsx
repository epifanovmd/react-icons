import React, { FC, memo } from "react";
import EvPlugCcs2Svg from "../svg/ev-plug-ccs2.svg";

export interface IEvPlugCcs2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EvPlugCcs2Icon: FC<IEvPlugCcs2IconProps> = memo(props => (
  <EvPlugCcs2Svg {...props} />
));
