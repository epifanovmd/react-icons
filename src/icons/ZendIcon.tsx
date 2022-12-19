import React, { FC, memo } from "react";
import ZendSvg from "../svg/zend.svg";

export interface IZendIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZendIcon: FC<IZendIconProps> = memo(props => (
  <ZendSvg {...props} />
));
