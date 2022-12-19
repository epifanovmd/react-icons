import React, { FC, memo } from "react";
import TrainCarGondolaFullSvg from "../svg/train-car-gondola-full.svg";

export interface ITrainCarGondolaFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrainCarGondolaFullIcon: FC<ITrainCarGondolaFullIconProps> = memo(
  props => <TrainCarGondolaFullSvg {...props} />,
);
