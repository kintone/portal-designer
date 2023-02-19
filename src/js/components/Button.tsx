import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import styled from "styled-components";

type Props = {
  variant: "normal" | "primary";
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  ariaExpanded?: boolean;
};

const Component = ({
  className,
  variant,
  label,
  onClick,
  ariaExpanded
}: PropsForStyled & Props) => {
  const context = useContext(EditorContext);

  return (
    <button
      type="button"
      className={`${className} ${className}__${variant}`}
      onClick={onClick}
      aria-expanded={ariaExpanded}
    >
      {label}
    </button>
  );
};

const StyledComponent = styled(Component)`
  font-family: メイリオ, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  min-width: 160px;
  height: 48px;
  text-align: center;
  margin: 0;
  padding: 0 16px;
  font-size: 1rem;
  cursor: pointer;
  line-height: 1.5;
  cursor: pointer;

  &__normal {
    color: #0072bf;
    background-color: #fff;
    border: 1px solid #e3e7e8;
    &:active,
    &:focus-visible,
    &:hover {
      background-color: #c8d6dd;
    }
  }

  &__primary {
    color: #fff;
    background-color: #0072bf;
    border: 1px solid #e3e7e8;
    &:active,
    &:focus-visible,
    &:hover {
      background-color: #004472;
    }
  }
}
`;

export const Button = StyledComponent;
