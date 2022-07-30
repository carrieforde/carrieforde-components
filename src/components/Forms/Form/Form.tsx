import React, {
  createContext,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import styles from "./Form.module.css";

//ordina-jworks.github.io/architecture/2021/02/12/react-generic-context.html
export type FormValues<T = unknown> = T;

interface FormContextProps {
  initialValues: FormValues;
  values: FormValues;
  setValues?: Dispatch<SetStateAction<FormValues>>;
}

export const FormContext = createContext<FormContextProps>({
  initialValues: {},
  values: {},
  setValues: undefined,
});

type FormProps = {
  children: ReactNode;
  handleSubmit: (values: FormValues) => void;
  handleReset?: () => void;
  initialValues: FormValues;
  actions: ReactNode;
};

export const Form: React.FC<FormProps> = ({
  actions,
  children,
  handleSubmit,
  handleReset,
  initialValues,
}) => {
  const [values, setValues] = useState<FormValues>(initialValues);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(values);
  };

  const onReset = (_: FormEvent) => {
    if (handleReset) {
      handleReset();
    }

    setValues(initialValues);
  };

  return (
    <FormContext.Provider value={{ initialValues, values, setValues }}>
      <form
        action="#"
        onSubmit={onSubmit}
        onReset={onReset}
        className={styles.form}
      >
        {children}

        <div className={styles.actions}>{actions}</div>
      </form>
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
