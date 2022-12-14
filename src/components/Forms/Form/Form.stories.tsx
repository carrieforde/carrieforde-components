import { Form as LibForm } from "./Form";
import React from "react";
import { ControlledInput } from "../Input/Input";
import { Button } from "../../Button/Button";
import Doc from "./Form.mdx";
import { Meta } from "@storybook/react";
import styled from "@emotion/styled";

const Wrapper = styled("div")({
  maxWidth: "100%",
  width: "650px",
});

export default {
  title: "Forms/Form",
  component: LibForm,
  parameters: {
    docs: {
      page: Doc,
    },
  },
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
} as Meta;

interface UserRegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultFormValues: UserRegistrationFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const Form = () => {
  const handleSubmit = (values: UserRegistrationFormValues) => {
    // Call function to map / transform form values before passing to API.
    console.log(values);
  };

  return (
    <LibForm
      initialValues={defaultFormValues}
      handleSubmit={handleSubmit}
      actions={
        <>
          <Button type="submit" variant="filled" color="primary">
            Submit
          </Button>
          <Button type="reset">Cancel</Button>
        </>
      }
    >
      <ControlledInput name="firstName" label="First Name" split />
      <ControlledInput name="lastName" label="Last Name" split />
      <ControlledInput name="email" label="Email Address" />
      <ControlledInput name="password" label="Password" />
      <ControlledInput name="confirmPassword" label="Confirm Password" />
    </LibForm>
  );
};
