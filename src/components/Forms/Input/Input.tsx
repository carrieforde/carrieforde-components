import React, { HTMLProps, Ref } from "react";
import { FormControl } from "../FormControl/FormControl";
import { Label } from "../Label/Label";
import { useField } from "../useField/useField";
import { BaseInput } from "./Input.styles";

// https://stackoverflow.com/questions/54654303/using-a-forwardref-component-with-children-in-typescript

type BaseInputProps = HTMLProps<HTMLInputElement>;

type InputProps = {
  ref?: Ref<HTMLInputElement>;
  name: string;
  label: string;
  split?: boolean;
} & BaseInputProps;

export const Input: React.FC<InputProps> = ({
  ref,
  name,
  label,
  split,
  ...props
}) => (
  <FormControl split={split}>
    <Label id={name}>{label}</Label>
    <BaseInput ref={ref} name={name} {...props} />
  </FormControl>
);

export type ControlledInputProps = InputProps;

export const ControlledInput: React.FC<ControlledInputProps> = ({
  ref,
  name,
  ...props
}) => {
  const { value, setValue } = useField(name);

  return (
    <Input ref={ref} name={name} value={value} onChange={setValue} {...props} />
  );
};
