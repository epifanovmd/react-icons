import React, { FC, memo } from "react";
import BookEditOutlineSvg from "../svg/book-edit-outline.svg";

export interface IBookEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookEditOutlineIcon: FC<IBookEditOutlineIconProps> = memo(
  props => <BookEditOutlineSvg {...props} />,
);
