import React, { FC, memo } from "react";
import TallyMark1Svg from "../svg/tally-mark-1.svg";

export interface ITallyMark1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TallyMark1Icon: FC<ITallyMark1IconProps> = memo(props => (
  <TallyMark1Svg {...props} />
));
