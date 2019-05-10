import React from "react";

const onClick = () => {
  window.open("about:blank", "_self").close();
};

const CancelButton = () => (
  <button type="button" className="action-cancel" onClick={onClick}>
    Cancel
  </button>
);

export default CancelButton;
