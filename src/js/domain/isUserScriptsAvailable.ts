const isUserScriptsAvailable = () => {
  try {
    // Property access which throws if developer mode is not enabled.
    chrome.userScripts;
    return true;
  } catch {
    // Not available.
    return false;
  }
}

export default isUserScriptsAvailable;
