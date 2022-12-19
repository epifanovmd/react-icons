import React, { FC, memo } from "react";
import LanguageFortranSvg from "../svg/language-fortran.svg";

export interface ILanguageFortranIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageFortranIcon: FC<ILanguageFortranIconProps> = memo(
  props => <LanguageFortranSvg {...props} />,
);
