import React, { FC, memo } from "react";
import ArchiveEditOutlineSvg from "../svg/archive-edit-outline.svg";

export interface IArchiveEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveEditOutlineIcon: FC<IArchiveEditOutlineIconProps> = memo(
  props => <ArchiveEditOutlineSvg {...props} />,
);
