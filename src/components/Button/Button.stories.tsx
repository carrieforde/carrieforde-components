import { Button } from "./Button";
import React from "react";

export default {
  title: "Button",
  component: Button,
};

export const TextButton = () => <Button color="info">Click Me</Button>;

export const OutlineButton = () => (
  <Button color="error" variant="outline">
    Click Me
  </Button>
);

export const FilledButton = () => (
  <Button color="secondary" variant="filled">
    Click Me
  </Button>
);
