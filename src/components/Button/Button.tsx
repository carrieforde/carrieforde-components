import React, { FC, ReactNode } from "react";
import {
  BaseButton,
  BaseButtonProps,
  FilledButton,
  OutlineButton,
} from "./Button.styles";

export type ButtonProps = {
  children: ReactNode;
  variant?: "text" | "outline" | "filled";
} & BaseButtonProps;

export const Button: FC<ButtonProps> = ({ children, variant, ...props }) => {
  if (variant === "filled") {
    return <FilledButton {...props}>{children}</FilledButton>;
  }

  if (variant === "outline") {
    return <OutlineButton {...props}>{children}</OutlineButton>;
  }

  return <BaseButton {...props}>{children}</BaseButton>;
};
