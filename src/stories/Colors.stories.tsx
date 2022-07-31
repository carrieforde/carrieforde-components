import styled from "@emotion/styled";
import { Meta } from "@storybook/react";
import React from "react";
import { Typography } from "../components";
import { BaseBody2 } from "../components/Typography/Typography.styles";
import { Color, ColorValues, theme } from "../theme";
import { capitalize } from "../utilities";
import Doc from "./Colors.mdx";

export default {
  title: "Theme/Colors",
  parameters: {
    docs: {
      page: Doc,
    },
  },
} as Meta;

const { palette } = theme;

const BaseColorPalette = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
  gridTemplateColumns: `repeat(auto-fit, minmax(calc(125px + ${theme.spacing(
    2
  )}), auto))`,
  marginTop: theme.spacing(2),
}));

type BaseColorChipProps = {
  color: Color;
  value: keyof ColorValues;
};

const BaseColorChip = styled("div")<BaseColorChipProps>(
  ({ theme, color, value }) => {
    const backgroundColor = theme.palette[color][value];

    return {
      backgroundColor,
      height: "125px",
      width: "125px",
    };
  }
);

const BaseColorName = styled(BaseBody2)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const BaseColorValue = styled("pre")({
  margin: 0,
});

export const Colors = () => (
  <div>
    <Typography variant="title">Colors</Typography>
    {Object.keys(palette).map((color) => (
      <section>
        <Typography key={color} variant="subtitle">
          {capitalize(color)}
        </Typography>

        <BaseColorPalette>
          {Object.keys(palette[color]).map((value) => (
            <div>
              <BaseColorChip
                color={color as Color}
                value={value as keyof ColorValues}
              />

              <BaseColorName>{value}</BaseColorName>
              <BaseColorValue>
                <code>{palette[color][value]}</code>
              </BaseColorValue>
            </div>
          ))}
        </BaseColorPalette>
      </section>
    ))}
  </div>
);
