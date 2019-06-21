import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";

const Notifier = () => {
  const { state, dispatch } = useContext(EditorContext);

  const handleAnimationEnd = () => {
    dispatch({ type: "NOTIFY_REMOVE" });
  };

  return (
    <div
      role="status"
      className="kpd-notifier"
      hidden={!state.notifying}
      onAnimationEnd={handleAnimationEnd}
    >
      {state.messageNotified}
    </div>
  );
};

export default Notifier;
