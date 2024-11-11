const USER_SCRIPT_ID = "kintone-portal-designer";

const registerUserScript = async (code: string) => {

  const existingScripts = await chrome.userScripts.getScripts({
    ids: [USER_SCRIPT_ID]
  });

  if (existingScripts.length > 0) {
    // Update existing script.
    await chrome.userScripts.update([
        {
        id: USER_SCRIPT_ID,
        matches: ['*://*/*'],
        js: [{ code }]
        }
    ]);
  } else {
    // Register new script.
    await chrome.userScripts.register([
        {
        id: USER_SCRIPT_ID,
        matches: ['*://*/*'],
        js: [{ code }]
        }
    ]);
  }
}

export default registerUserScript;
