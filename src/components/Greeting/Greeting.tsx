import React from "react";
import s from "./Greeting.module.css";

export type GreetingProps = {
  name: string;
};

export const Greeting: React.FC<GreetingProps> = ({ name }) => (
  <p className={s.greeting}>Hello {name}</p>
);
