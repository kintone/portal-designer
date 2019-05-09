import React, { useContext } from 'react';
import { EditorStore } from '../../EditorStore';
import PortalHeaderColorInput from '../../components/tabpanelcontents/PortalHeaderColorInput';

export default (props) => {
  const { state, dispatch } = useContext(EditorStore);

  const onChange = (portalHeaderColor) => {
    dispatch({ type: 'PORTAL_HEADER_COLOR_CHANGE', portalHeaderColor });
  };

  return (
    <PortalHeaderColorInput
      {...props}
      value={state.editor.portalHeaderColor}
      onChange={onChange}
    />
  );
};
