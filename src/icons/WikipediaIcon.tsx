import React, { FC, memo } from "react";
import WikipediaSvg from "../svg/wikipedia.svg";

export interface IWikipediaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WikipediaIcon: FC<IWikipediaIconProps> = memo(props => (
  <WikipediaSvg {...props} />
));
