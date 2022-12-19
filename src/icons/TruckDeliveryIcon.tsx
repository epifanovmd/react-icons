import React, { FC, memo } from "react";
import TruckDeliverySvg from "../svg/truck-delivery.svg";

export interface ITruckDeliveryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckDeliveryIcon: FC<ITruckDeliveryIconProps> = memo(props => (
  <TruckDeliverySvg {...props} />
));
