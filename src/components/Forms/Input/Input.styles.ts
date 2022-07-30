import styled from "@emotion/styled";
import { HTMLProps } from "react";
import { ComponentTheme } from "../../../theme";

export type BaseInputProps = HTMLProps<HTMLInputElement>;

export const BaseInput = styled("input")<BaseInputProps>(({ theme }) => {
  const { borderRadius, palette, fonts, spacing } = theme as ComponentTheme;

  return {
    border: "1px solid",
    borderColor: palette.default[300],
    borderRadius,
    boxSizing: "border-box",
    fontFamily: fonts.body,
    outline: 0,
    padding: spacing(1),
    transition: "border-color 0.3s ease",
    width: "100%",

    "&:focus": {
      borderColor: palette.primary[600],
    },
  };
});
