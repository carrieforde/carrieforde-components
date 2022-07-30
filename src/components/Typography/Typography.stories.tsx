import React from "react";
import { Meta } from "@storybook/react";
import { Typography } from "./Typography";

export default {
  title: "Typography",
} as Meta;

const text = "The quick brown fox jumped over the lazy dog.";

export const Base = () => <Typography>{text}</Typography>;
export const Title = () => (
  <Typography component="h1" variant="title">
    {text}
  </Typography>
);
export const Subtitle = () => (
  <Typography variant="subtitle">{text}</Typography>
);
export const Body1 = () => (
  <Typography variant="body1" component="h3">
    {text}
  </Typography>
);
export const Body2 = () => <Typography variant="body2">{text}</Typography>;
export const Overline = () => (
  <Typography variant="overline">{text}</Typography>
);
