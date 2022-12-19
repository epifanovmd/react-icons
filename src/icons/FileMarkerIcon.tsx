import React, { FC, memo } from "react";
import FileMarkerSvg from "../svg/file-marker.svg";

export interface IFileMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileMarkerIcon: FC<IFileMarkerIconProps> = memo(props => (
  <FileMarkerSvg {...props} />
));
