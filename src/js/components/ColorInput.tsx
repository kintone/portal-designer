import React from "react";

const ColorInput = (props: ColorInputProps) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(evt.target.value);
  };

  // TODO: 一意な値にする
  const getId = () => props.className;

  return (
    <label htmlFor={getId()}>
      <span className={`${props.className}-label-text`}>{props.label}</span>
      <input
        type="text"
        id={getId()}
        className={props.className}
        value={props.value}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={handleChange}
      />
    </label>
  );
};

export interface ColorInputProps {
  className: string;
  onChange: (value: string) => void;
  value: string;
  label: string;
  disabled?: boolean;
  placeholder: string;
}

ColorInput.defaultProps = {
  className: "color-input",
  value: "",
  disabled: false,
  placeholder: ""
};

export default ColorInput;
