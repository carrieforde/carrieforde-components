import styled from "@emotion/styled";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { Color } from "../../theme";
import { capitalize } from "../../utilities";
import { Button, ButtonProps } from "./Button";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export default {
  title: "Button",
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
} as Meta;

const colors: Color[] = [
  "default",
  "primary",
  "secondary",
  "info",
  "error",
  "warning",
  "success",
];

const Template: Story<ButtonProps> = ({ ref, ...args }) => (
  <>
    {colors.map((color) => (
      <Button color={color} {...args}>
        {capitalize(color)}
      </Button>
    ))}
  </>
);

export const TextButton = Template.bind({});
export const OutlineButton = Template.bind({});
export const FilledButton = Template.bind({});
export const Link = Template.bind({});

OutlineButton.args = {
  variant: "outline",
};

FilledButton.args = {
  variant: "filled",
};

Link.args = {
  component: "a",
  to: "#",
};
