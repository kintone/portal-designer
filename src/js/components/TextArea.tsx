import * as React from "react";

const TextArea = (props: TextAreaProps) => {
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(evt.target.value);
  };

  return (
    <textarea
      className={props.className}
      name={props.name}
      aria-label={props.label}
      value={props.value}
      onChange={handleChange}
    />
  );
};

export interface TextAreaProps {
  className: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

TextArea.defaultProps = {
  className: "textarea",
  name: "",
  value: ""
};

export default TextArea;
