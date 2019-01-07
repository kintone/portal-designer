(() => {

    function loadTextAreaValue() {
        let htmlString = chrome.storage.local.get(['html', 'css'], (value) => {
            document.querySelector('.html-input').value = value.html || '';
            document.querySelector('.css-input').value = value.css || '';
        });
    }

    function saveTextAreaValue() {
        let htmlString = document.querySelector('.html-input').value;
        chrome.storage.local.set({'html': htmlString});

        let cssString = document.querySelector('.css-input').value;
        chrome.storage.local.set({'css': cssString});
    }

    loadTextAreaValue(); 
    var saveEl = document.querySelector('.action-save');
    saveEl.addEventListener('click', saveTextAreaValue);
})();
