import React, { FC, memo } from "react";
import LanguageHtml5Svg from "../svg/language-html5.svg";

export interface ILanguageHtml5IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageHtml5Icon: FC<ILanguageHtml5IconProps> = memo(props => (
  <LanguageHtml5Svg {...props} />
));
