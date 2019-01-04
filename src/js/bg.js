const IPHONE_USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25';

let popupWindowIds = [];

function spoofUserAgentInWindow(windowId) {
    chrome.webRequest.onBeforeSendHeaders.addListener(info => {
        let headers = info.requestHeaders;
        let userAgentHeader = headers.find(header => header.name.toLowerCase() === 'user-agent');
        if (userAgentHeader) {
            userAgentHeader.value = IPHONE_USER_AGENT;
        }
        return {requestHeaders: headers};
    },
    {urls: ['<all_urls>'], windowId: windowId},
    ['blocking', 'requestHeaders']
    );
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // window.openの第一引数に空を指定すると、location.hrefで書き換えても、目的のページに遷移しないことがあるため、
    // https://www.kintone.comを指定している。対症療法的なので、他によい実装があればそれを採用したい。
    const previewWindow = window.open('https://www.kintone.com', '_blank', 'width=375,height=667,top=10,left=10');
    previewWindow.focus();

    chrome.windows.getCurrent(win => {
        if (!popupWindowIds.includes(win.id)) {
            spoofUserAgentInWindow(win.id);
            popupWindowIds.push(win.id);
        }
        previewWindow.location.href = message['url'];
    });
});
