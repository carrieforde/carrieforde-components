import { Form as LibForm } from "./Form";
import React from "react";
import { ControlledInput } from "../Input/Input";
import { Button } from "../../Button/Button";

export default {
  title: "Forms/Form",
  component: LibForm,
};

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const defaultFormValues: FormValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

export const Form = () => {
  const handleSubmit = (values: FormValues) => console.log(values);

  return (
    <LibForm
      initialValues={defaultFormValues}
      handleSubmit={handleSubmit}
      actions={
        <>
          <Button type="submit" variant="filled" color="primary">
            Submit
          </Button>
          <Button type="reset" color="error" variant="outline">
            Cancel
          </Button>
        </>
      }
    >
      <ControlledInput name="firstName" label="First Name" split />
      <ControlledInput name="lastName" label="Last Name" split />
      <ControlledInput name="phone" label="Phone Number" />
      <ControlledInput name="email" label="Email Address" />
    </LibForm>
  );
};
