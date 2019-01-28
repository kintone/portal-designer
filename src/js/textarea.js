export class TextArea {

    _loadValue() {
        chrome.storage.local.get(['html', 'css', 'js'], (value) => {
            document.querySelector('.html-input').value = value.html || '';
            document.querySelector('.css-input').value = value.css || '';
            document.querySelector('.js-input').value = value.js || '';
        });
    }

    _saveValue() {
        const htmlString = document.querySelector('.html-input').value;
        chrome.storage.local.set({ 'html': htmlString });

        const cssString = document.querySelector('.css-input').value;
        chrome.storage.local.set({ 'css': cssString });

        const jsString = document.querySelector('.js-input').value;
        chrome.storage.local.set({ 'js': jsString });
    }

    init() {
        this._loadValue();
        const saveEl = document.querySelector('.action-save');
        saveEl.addEventListener('click', this._saveValue);
    }
}
