import React, { FC, memo } from "react";
import ArchiveRemoveSvg from "../svg/archive-remove.svg";

export interface IArchiveRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveRemoveIcon: FC<IArchiveRemoveIconProps> = memo(props => (
  <ArchiveRemoveSvg {...props} />
));
