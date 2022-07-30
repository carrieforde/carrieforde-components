import React, { forwardRef, HTMLProps, Ref } from "react";
import { Typography } from "../../Typography/Typography";
import { useField } from "../useField/useField";
import styles from "./Input.module.css";
import cn from "classnames";

// https://stackoverflow.com/questions/54654303/using-a-forwardref-component-with-children-in-typescript

type BaseInputProps = HTMLProps<HTMLInputElement>;

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    return <input ref={ref} className={styles.input} {...props} />;
  }
);

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
}) => {
  const wrapperClasses = cn(styles.wrapper, { [styles.split]: !!split });

  return (
    <label htmlFor={name} className={wrapperClasses}>
      <Typography component="span" variant="label">
        {label}
      </Typography>
      <BaseInput ref={ref} name={name} {...props} />
    </label>
  );
};

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
