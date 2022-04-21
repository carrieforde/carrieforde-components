import { Meta } from "@storybook/react";
import React from "react";
import { Greeting } from "./Greeting";

export default {
  title: "Greeting",
  component: Greeting,
} as Meta;

export const DefaultGreeting = () => <Greeting name="Whitney" />;
