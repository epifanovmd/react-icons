import React, { FC, memo } from "react";
import ContentSaveOffSvg from "../svg/content-save-off.svg";

export interface IContentSaveOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContentSaveOffIcon: FC<IContentSaveOffIconProps> = memo(props => (
  <ContentSaveOffSvg {...props} />
));
