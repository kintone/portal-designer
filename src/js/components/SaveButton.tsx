import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import saveEditor from "../domain/saveEditor";
import { Button } from "./Button";

const Component = ({ className }: PropsForStyled) => {
  const context = useContext(EditorContext);

  const onClick = async () => {
    await saveEditor(context);
  };

  return (
    <Button
      variant="primary"
      label={chrome.i18n.getMessage("kpd_save_button")}
      onClick={onClick}
    />
  );
};

export const SaveButton = Component;
