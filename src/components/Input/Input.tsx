import React from "react";
import css from "./Input.module.css";

interface InputProps {
  label: string,
  type: string,
  value: string,
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void
};

export const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChangeValue
}) => (
  <div className={css.input}>
    <input
      onChange={onChangeValue}
      type={type}
      value={value}
      nav-selectable="true"
    />
    <label>{label}</label>
  </div>
);
