import { BaseInput as LibBaseInput, Input as LibInput } from "./Input";
import React from "react";
import { Form } from "../Form/Form";

export default {
  title: "Forms/Input",
  component: LibInput,
};

export const BaseInput = () => <LibBaseInput />;
export const Input = () => <LibInput name="firstName" label="First Name" />;

// export const ControlledInput = () => (
//   <Form
//     initialValues={{ firstName: "bob" }}
//     handleSubmit={(values) => console.log(values)}
//   >
//     <LibControlledInput name="firstName" />
//   </Form>
// );
