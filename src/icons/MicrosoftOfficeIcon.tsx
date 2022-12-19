import React, { FC, memo } from "react";
import MicrosoftOfficeSvg from "../svg/microsoft-office.svg";

export interface IMicrosoftOfficeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftOfficeIcon: FC<IMicrosoftOfficeIconProps> = memo(
  props => <MicrosoftOfficeSvg {...props} />,
);
