import React, { useContext, useEffect } from "react";
import { EditorContext } from "../EditorContext";

const SaveNotifier = () => {
  const { state, dispatch } = useContext(EditorContext);

  const handleAnimationEnd = () => {
    dispatch({ type: "NOTIFY_SAVED", notifySaved: false });
  };

  return (
    <div
      role="status"
      className="save-notifier"
      hidden={!state.notifySaved}
      onAnimationEnd={handleAnimationEnd}
    >
      Saved
    </div>
  );
};

export default SaveNotifier;
