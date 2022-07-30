import styled from "@emotion/styled";
import { HTMLProps } from "react";
import { Color, ComponentTheme } from "../../theme";

export type BaseButtonProps = {
  color?: Color;
} & HTMLProps<HTMLButtonElement>;

export const BaseButton = styled("button")<BaseButtonProps>(
  ({ theme, color }) => {
    const { palette, fonts, fontSize, spacing } = theme as ComponentTheme;
    const { main } = palette[color ?? "default"];

    return {
      appearance: "none",
      backgroundColor: "transparent",
      border: 0,
      borderRadius: "4px",
      color: main,
      fontFamily: fonts.body,
      fontSize: fontSize(16),
      fontWeight: 600,
      padding: `${spacing(1)} ${spacing(2)}`,
      transition: "color 0.3s ease, background-color 0.3s ease",

      "&:hover": {
        color: palette[color ?? "default"][600],
      },
    };
  }
);

export const OutlineButton = styled(BaseButton)<BaseButtonProps>(
  ({ theme, color }) => {
    const { palette } = theme as ComponentTheme;
    const { main, contrast } = palette[color ?? "default"];

    return {
      boxShadow: `inset 0 0 0 2px ${main}`,
      color: main,

      "&:hover": {
        backgroundColor: main,
        color: contrast,
      },
    };
  }
);

export const FilledButton = styled(BaseButton)<BaseButtonProps>(
  ({ theme, color }) => {
    const { palette } = theme as ComponentTheme;
    const { main, contrast } = palette[color ?? "primary"];

    return {
      backgroundColor: main,
      color: contrast,

      "&:hover": {
        backgroundColor: palette[color ?? "default"][600],
        color: contrast,
      },
    };
  }
);
