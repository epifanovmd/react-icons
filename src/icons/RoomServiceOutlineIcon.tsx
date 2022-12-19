import React, { FC, memo } from "react";
import RoomServiceOutlineSvg from "../svg/room-service-outline.svg";

export interface IRoomServiceOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RoomServiceOutlineIcon: FC<IRoomServiceOutlineIconProps> = memo(
  props => <RoomServiceOutlineSvg {...props} />,
);
