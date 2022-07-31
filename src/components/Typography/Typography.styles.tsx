import styled from "@emotion/styled";
import { HTMLProps, ReactNode, Ref } from "react";
import { TypographyElement } from "./Typography";

export type BaseTypographyProps = {
  children: ReactNode;
  ref?: Ref<TypographyElement>;
} & HTMLProps<TypographyElement>;

export const BaseTypography = styled("p")<BaseTypographyProps>({
  margin: 0,
});

export const BaseTitle = styled(BaseTypography)(({ theme }) => {
  const { fontSize, palette } = theme;

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
  const { fontSize, spacing } = theme;

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
  const { fontSize } = theme;

  return {
    fontSize: fontSize(18),
    fontWeight: 400,
  };
});

export const BaseBody2 = styled(BaseTypography)(({ theme }) => {
  const { fontSize, spacing } = theme;

  return {
    fontSize: fontSize(14),
    fontWeight: 500,
    lineHeight: 1.2,
    marginBottom: spacing(0.5),
  };
});

export const BaseOverline = styled(BaseTypography)(({ theme }) => {
  const { fontSize, spacing } = theme;

  return {
    display: "inline-block",
    fontSize: fontSize(12),
    fontWeight: 300,
    marginBottom: spacing(0.5),
    textTransform: "uppercase",
  };
});
