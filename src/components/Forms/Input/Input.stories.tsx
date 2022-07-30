import React from "react";
import { Input as LibInput } from "./Input";

export default {
  title: "Forms/Input",
  component: LibInput,
};

export const Input = () => <LibInput name="firstName" label="First Name" />;
