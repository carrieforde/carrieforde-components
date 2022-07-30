import { ChangeEvent } from "react";
import { FormValues, useForm } from "../Form/Form";

export const useField = (name: string) => {
  const { values, setValues } = useForm();
  const value = values[name] as string;

  if (!setValues) {
    throw new Error("useField must be used within a Form component!");
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!setValues) {
      return;
    }

    const { name, value } = event.target;

    setValues((prevValues: FormValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return {
    value,
    setValue: handleChange,
  };
};
