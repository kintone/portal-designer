import React, { useContext, useEffect } from "react";
import { EditorContext } from "../EditorContext";

const BeforeUnloadHandler = () => {
  // @ts-ignore
  const { state } = useContext(EditorContext);

  const handleOnBeforeUnload = (evt: BeforeUnloadEvent) => {
    evt.preventDefault();
    evt.returnValue = "";
  };

  useEffect(() => {
    if (state.edited) {
      window.addEventListener("beforeunload", handleOnBeforeUnload);
    }
    return () => {
      window.removeEventListener("beforeunload", handleOnBeforeUnload);
    };
  }, [state.edited]);

  return <></>;
};

export default BeforeUnloadHandler;
