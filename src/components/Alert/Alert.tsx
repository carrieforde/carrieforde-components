import React, { ReactNode } from "react";
import { BaseAlert, BaseAlertProps } from "./Alert.styles";

export type AlertProps = {
  children: ReactNode;
  icon?: ReactNode;
} & BaseAlertProps;

export const Alert: React.FC<AlertProps> = ({ icon, variant, children }) => (
  <BaseAlert variant={variant}>
    {icon ?? null}
    <div>{children}</div>
  </BaseAlert>
);
