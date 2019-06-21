import React, { useContext, useEffect } from "react";
import { EditorContext } from "../EditorContext";

const SaveNotifier = () => {
  const { state, dispatch } = useContext(EditorContext);

  const handleAnimationEnd = () => {
    dispatch({ type: "NOTIFY_REMOVE" });
  };

  return (
    <div
      role="status"
      className="save-notifier"
      hidden={!state.notifying}
      onAnimationEnd={handleAnimationEnd}
    >
      {state.messageNotified}
    </div>
  );
};

export default SaveNotifier;
