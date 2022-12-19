import React, { FC, memo } from "react";
import InformationSvg from "../svg/information.svg";

export interface IInformationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InformationIcon: FC<IInformationIconProps> = memo(props => (
  <InformationSvg {...props} />
));
