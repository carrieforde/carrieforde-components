import styled from "@emotion/styled";
import { HTMLProps } from "react";
import { Color } from "../../theme";

export type BaseAlertProps = {
  variant?: Omit<Color, "primary" | "secondary">;
} & HTMLProps<HTMLDivElement>;

export const BaseAlert = styled("div")<BaseAlertProps>(
  ({ theme, variant = "default" }) => {
    const { borderRadius, palette, spacing } = theme;
    const { light, dark } = palette[variant as Color];

    return {
      backgroundColor: light,
      borderRadius,
      color: dark,
      display: "flex",
      gap: spacing(2),
      marginBottom: spacing(4),
      marginTop: spacing(4),
      padding: `${spacing(2)} ${spacing(3)}`,
    };
  }
);
