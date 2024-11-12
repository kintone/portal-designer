import React from "react";

const MessageBar = () => {
  return (
    <div className="messagebar">
      <strong>Please turn on Chrome extension Developer mode to execute JavaScript code.</strong>
      <ol>
        <li>Go to <code>chrome://extensions</code> in a new tab. (By design <code>chrome://</code> URLs are not linkable.)</li>
        <li>Enable Developer mode using the toggle button at the top right of the page.</li>
        <li>Reload Kintone Portal Designer's editor page (this page).</li>
        <li>Press Save Button.</li>
      </ol>
    </div>
  )
};

export default MessageBar;