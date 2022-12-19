import React, { FC, memo } from "react";
import DatabaseLockSvg from "../svg/database-lock.svg";

export interface IDatabaseLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseLockIcon: FC<IDatabaseLockIconProps> = memo(props => (
  <DatabaseLockSvg {...props} />
));
