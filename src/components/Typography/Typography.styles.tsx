import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FC, HTMLProps, ReactNode } from "react";
import { ComponentTheme } from "../../theme";

type BaseTypographyProps = {
  children: ReactNode;
} & HTMLProps<HTMLElement>;

export type TypographyProps = {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: "title" | "subtitle";
} & BaseTypographyProps;

export const BaseTypography = styled("p")({
  margin: 0,
});

export const BaseTitle = styled(BaseTypography)(({ theme }) => {
  const { fontSize, palette } = theme as ComponentTheme;

  return {
    color: palette.default[500],
    fontSize: fontSize(36),
    fontWeight: 300,
    lineHeight: 1.1,

    "@media screen and (min-width: 600px)": {
      fontSize: fontSize(60),
    },
  };
});

export const BaseSubtitle = styled(BaseTypography)(({ theme }) => {
  const { fontSize, spacing } = theme as ComponentTheme;

  return {
    fontSize: fontSize(4),
    fontWeight: 600,
    lineHeight: 1.4,
    marginTop: spacing(5),

    "@media screen and (min-width: 600px)": {
      fontSize: fontSize(20),
    },
  };
});

export const BaseBody1 = styled(BaseTypography)(({ theme }) => {
  const { fontSize } = theme as ComponentTheme;

  return {
    fontSize: fontSize(18),
    fontWeight: 400,
  };
});

export const BaseBody2 = styled(BaseTypography)(({ theme }) => {
  const { fontSize, spacing } = theme as ComponentTheme;

  return {
    fontSize: fontSize(14),
    fontWeight: 500,
    lineHeight: 1.2,
    marginBottom: spacing(0.5),
  };
});

export const BaseOverline = styled(BaseTypography)(({ theme }) => {
  const { fontSize, spacing } = theme as ComponentTheme;

  return {
    display: "inline-block",
    fontSize: fontSize(12),
    fontWeight: 300,
    marginBottom: spacing(0.5),
    textTransform: "uppercase",
  };
});
