import { Meta, Story } from "@storybook/react";
import { Alert, AlertProps } from "./Alert";
import React from "react";
import { Typography } from "../Typography/Typography";

export default {
  title: "Alert",
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const DefaultAlert = Template.bind({});
export const Info = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Error = Template.bind({});

DefaultAlert.args = {
  children: <Typography>This is the default alert.</Typography>,
};

Info.args = {
  children: <Typography>This is an info alert.</Typography>,
  variant: "info",
};

Success.args = {
  children: <Typography>This is a success alert.</Typography>,
  variant: "success",
};

Warning.args = {
  children: <Typography>This is a warning alert.</Typography>,
  variant: "warning",
};

Error.args = {
  children: <Typography>This is an error alert.</Typography>,
  variant: "error",
};
