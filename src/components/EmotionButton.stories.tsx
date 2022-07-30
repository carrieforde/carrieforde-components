import React from "react";
import { Meta } from "@storybook/react";
import styled from "@emotion/styled";
import { Color, ComponentTheme } from "../theme";

export default {
  title: "Emotion Button",
} as Meta;

type ButtonProps = {
  color?: Color;
};

const BaseButton = styled("button")<ButtonProps>(({ theme, color }) => {
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
});

const OutlineButton = styled(BaseButton)<ButtonProps>(({ theme, color }) => {
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
});

const FilledButton = styled(BaseButton)<ButtonProps>(({ theme, color }) => {
  const { palette } = theme as ComponentTheme;
  const { main, contrast } = palette[color ?? "primary"];

  return {
    backgroundColor: main,
    color: contrast,

    "&:hover": {
      backgroundColor: palette.primary[600],
      color: contrast,
    },
  };
});

export const Button = () => <BaseButton>Click Me!</BaseButton>;
export const ButtonOutlined = () => (
  <OutlineButton color="error">Click Me!</OutlineButton>
);
export const ButtonFilled = () => (
  <FilledButton color="error">Click ME!</FilledButton>
);
