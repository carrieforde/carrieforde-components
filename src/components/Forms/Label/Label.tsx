import React, { FC, ReactNode } from "react";
import { Typography } from "../../Typography/Typography";

type LabelProps = {
  id: string;
  children: ReactNode;
};

export const Label: FC<LabelProps> = ({ children, id }) => (
  <Typography component="label" variant="body2" htmlFor={id}>
    {children}
  </Typography>
);
