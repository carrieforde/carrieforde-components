import React, { CSSProperties, forwardRef, HTMLProps } from "react";
import s from "./Button.module.css";
import cn from "classnames";

type ButtonProps = {
  variant?: "text" | "outline" | "filled";
  color?: "primary" | "secondary" | "info" | "error";
} & HTMLProps<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "text", color = "primary", className, children, ...props },
    ref
  ) => {
    const classes = cn(s.button, className, {
      [s[variant]]: !!variant,
    });

    const colors = {
      "--button-color": `var(--color-${color})`,
      "--button-background": `var(--color-${color})`,
      "--button-background-hover": `var(--color-${color}-hover)`,
    } as CSSProperties;

    return (
      <button {...props} ref={ref} style={colors} className={classes}>
        {children}
      </button>
    );
  }
);
