import { Meta } from "@storybook/react";
import React from "react";
import { Color } from "../../theme";
import { Button } from "./Button";

export default {
  title: "Button",
} as Meta;

function capitalize(text: string) {
  return [text.charAt(0).toUpperCase(), text.substring(1, text.length)].join(
    ""
  );
}

const colors: Color[] = [
  "default",
  "primary",
  "secondary",
  "info",
  "error",
  "warning",
  "success",
];

export const TextButton = () => (
  <div>
    {colors.map((color) => (
      <Button color={color}>{capitalize(color)}</Button>
    ))}
  </div>
);

export const OutlineButton = () => (
  <div>
    {colors.map((color) => (
      <Button variant="outline" color={color}>
        {capitalize(color)}
      </Button>
    ))}
  </div>
);

export const FilledButton = () => (
  <div>
    {colors.map((color) => (
      <Button variant="filled" color={color}>
        {capitalize(color)}
      </Button>
    ))}
  </div>
);
