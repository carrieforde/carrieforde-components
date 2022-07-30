import React, { ReactNode } from "react";
import cn from "classnames";
import styles from "./Typography.module.css";

type BaseTypographyProps = {
  children: ReactNode;
};

type TypographyProps = {
  className?: string;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: "title" | "subtitle" | "body" | "overline" | "label";
} & BaseTypographyProps;

export interface TypographyComposition {
  H1: React.FC<BaseTypographyProps>;
  H2: React.FC<BaseTypographyProps>;
  H3: React.FC<BaseTypographyProps>;
  H4: React.FC<BaseTypographyProps>;
  H5: React.FC<BaseTypographyProps>;
  H6: React.FC<BaseTypographyProps>;
}

export const Typography: React.FC<TypographyProps> & TypographyComposition = ({
  children,
  className,
  component = "p",
  variant,
}) => {
  const classes = cn(styles.typography, className, {
    [styles[variant ?? ""]]: !!variant,
  });
  const Element = component;

  return <Element className={classes}>{children}</Element>;
};

const H1: React.FC<BaseTypographyProps> = ({ children }) => (
  <Typography component="h1">{children}</Typography>
);

const H2: React.FC<BaseTypographyProps> = ({ children }) => (
  <Typography component="h2">{children}</Typography>
);

const H3: React.FC<BaseTypographyProps> = ({ children }) => (
  <Typography component="h3">{children}</Typography>
);

const H4: React.FC<BaseTypographyProps> = ({ children }) => (
  <Typography component="h4">{children}</Typography>
);

const H5: React.FC<BaseTypographyProps> = ({ children }) => (
  <Typography component="h5">{children}</Typography>
);

const H6: React.FC<BaseTypographyProps> = ({ children }) => (
  <Typography component="h6">{children}</Typography>
);

Typography.H1 = H1;
Typography.H2 = H2;
Typography.H3 = H3;
Typography.H4 = H4;
Typography.H5 = H5;
Typography.H6 = H6;
