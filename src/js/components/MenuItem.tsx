import React from "react";

const MenuItem = (props: MenuItemProps) => {
  return (
    <button
      type="button"
      role="menuitem"
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export interface MenuItemProps {
  label: string;
  onClick: (evt: React.MouseEvent) => void;
  className: string;
}

export default MenuItem;
