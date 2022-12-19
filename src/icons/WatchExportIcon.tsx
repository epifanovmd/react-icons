import React, { FC, memo } from "react";
import WatchExportSvg from "../svg/watch-export.svg";

export interface IWatchExportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WatchExportIcon: FC<IWatchExportIconProps> = memo(props => (
  <WatchExportSvg {...props} />
));
