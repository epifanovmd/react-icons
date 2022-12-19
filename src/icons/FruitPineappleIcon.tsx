import React, { FC, memo } from "react";
import FruitPineappleSvg from "../svg/fruit-pineapple.svg";

export interface IFruitPineappleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FruitPineappleIcon: FC<IFruitPineappleIconProps> = memo(props => (
  <FruitPineappleSvg {...props} />
));
