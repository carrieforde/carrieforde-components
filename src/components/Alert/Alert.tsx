import React, { ReactNode } from "react";
import s from "./Alert.module.css";
import cn from "classnames";

export type AlertProps = {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "info" | "warning" | "success" | "error";
};

export const Alert: React.FC<AlertProps> = ({
  icon,
  variant = "default",
  children,
}) => {
  const classes = cn(s.alert, {
    [s[variant]]: variant,
  });

  return (
    <div className={classes}>
      {icon ?? null}
      {children}
    </div>
  );
};
