import React from "react";

const Checkbox = (props: CheckboxProps) => {
  // TODO: インスタンスごとに異なる値にする
  const generateCheckBoxId = () => props.className;

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(evt.target.checked);
  };

  return (
    <div className={props.className}>
      <input
        type="checkbox"
        id={generateCheckBoxId()}
        className={`${props.className}-input`}
        checked={props.checked}
        onChange={handleChange}
      />
      <label // eslint-disable-line
        htmlFor={generateCheckBoxId()}
        className={`${props.className}-label`}
      >
        {props.label}
      </label>
    </div>
  );
};

export interface CheckboxProps {
  checked: boolean;
  className: string;
  label: string;
  onChange: (value: boolean) => void;
}

Checkbox.defaultProps = {
  checked: false,
  className: "checkbox"
};

export default Checkbox;
