import React, { FC, memo } from "react";
import ImageAreaSvg from "../svg/image-area.svg";

export interface IImageAreaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageAreaIcon: FC<IImageAreaIconProps> = memo(props => (
  <ImageAreaSvg {...props} />
));
