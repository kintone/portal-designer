import React, { useState, useEffect } from "react";
import ImporterButton from "./ImporterButton";
import ImporterMenu from "./ImporterMenu";

const Importer = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    window.addEventListener("keyup", handleKeyup);
    return () => {
      window.removeEventListener("click", handleWindowClick);
      window.removeEventListener("keyup", handleKeyup);
    };
  }, []);

  const toggleMenu = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  const handleButtonClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    toggleMenu();
  };

  const handleMenuClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    closeMenu();
  };

  const handleWindowClick = () => {
    closeMenu();
  };

  const handleKeyup = (evt: any) => {
    if (evt.keyCode === 27) {
      // ESC key
      closeMenu();
    }
  };

  return (
    <div className="action-import-wrapper">
      <ImporterButton expanded={expanded} onClick={handleButtonClick} />
      <ImporterMenu expanded={expanded} onClick={handleMenuClick} />
    </div>
  );
};

export default Importer;
