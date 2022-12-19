import React, { FC, memo } from "react";
import TextSvg from "../svg/text.svg";

export interface ITextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextIcon: FC<ITextIconProps> = memo(props => (
  <TextSvg {...props} />
));
