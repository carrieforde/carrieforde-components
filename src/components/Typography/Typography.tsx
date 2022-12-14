import React, { forwardRef, ReactElement } from "react";
import {
  BaseBody1,
  BaseBody2,
  BaseOverline,
  BaseSubtitle,
  BaseTitle,
  BaseTypography,
  BaseTypographyProps,
} from "./Typography.styles";

type TypographyVariant = "title" | "subtitle" | "body1" | "body2" | "overline";

type TypographyComponent =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "label"
  | "a";

export type TypographyElement =
  | HTMLParagraphElement
  | HTMLHeadingElement
  | HTMLSpanElement
  | HTMLLabelElement
  | HTMLAnchorElement;

type TypographyProps = {
  component?: TypographyComponent;
  variant?: TypographyVariant;
} & BaseTypographyProps;

function getTypographyVariant({
  variant,
  children,
  component,
  ref,
}: TypographyProps): ReactElement | null {
  const map: Record<
    TypographyVariant,
    (props: TypographyProps) => ReactElement
  > = {
    title: ({ children, component, ref }) => (
      <BaseTitle as={component ?? "h1"} ref={ref}>
        {children}
      </BaseTitle>
    ),
    subtitle: ({ children, component, ref }) => (
      <BaseSubtitle as={component} ref={ref}>
        {children}
      </BaseSubtitle>
    ),
    body1: ({ children, component, ref }) => (
      <BaseBody1 as={component} ref={ref}>
        {children}
      </BaseBody1>
    ),
    body2: ({ children, component, ref }) => (
      <BaseBody2 as={component} ref={ref}>
        {children}
      </BaseBody2>
    ),
    overline: ({ children, component, ref }) => (
      <BaseOverline as={component} ref={ref}>
        {children}
      </BaseOverline>
    ),
  };

  return variant ? map[variant]({ children, component, ref }) : null;
}

export const Typography = forwardRef<TypographyElement, TypographyProps>(
  ({ children, component, variant }, ref) => {
    if (variant) {
      return getTypographyVariant({ children, component, variant, ref });
    }

    return (
      <BaseTypography as={component} ref={ref}>
        {children}
      </BaseTypography>
    );
  }
);
