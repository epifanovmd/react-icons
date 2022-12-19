import React, { FC, memo } from "react";
import ImageSizeSelectLargeSvg from "../svg/image-size-select-large.svg";

export interface IImageSizeSelectLargeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ImageSizeSelectLargeIcon: FC<IImageSizeSelectLargeIconProps> =
  memo(props => <ImageSizeSelectLargeSvg {...props} />);
