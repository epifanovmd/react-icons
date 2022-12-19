import React, { FC, memo } from "react";
import ProjectorScreenSvg from "../svg/projector-screen.svg";

export interface IProjectorScreenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProjectorScreenIcon: FC<IProjectorScreenIconProps> = memo(
  props => <ProjectorScreenSvg {...props} />,
);
