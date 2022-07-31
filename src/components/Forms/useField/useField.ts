import { ChangeEvent } from "react";
import { FormValues, useForm } from "../Form/Form";

export const useField = <T>(name: string) => {
  const { values, setValues } = useForm();
  const value: T = (values as Record<any, any>)[name];

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

    setValues((prevValues: FormValues<Record<any, any>>) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return {
    value,
    setValue: handleChange,
  };
};
