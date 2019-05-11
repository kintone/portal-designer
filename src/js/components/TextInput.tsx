import * as React from "react";

const TextInput = (props: Props) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(evt.target.value);
  };

  return (
    <input
      className={props.className}
      type="text"
      placeholder={props.placeholder}
      aria-label={props.label}
      value={props.value}
      onChange={handleChange}
    />
  );
};

interface Props {
  className: string;
  value: string;
  placeholder: string;
  label: string;
  onChange: (value: string) => void;
}

TextInput.defaultProps = {
  className: "text-input",
  value: "",
  placeholder: ""
};

export default TextInput;
