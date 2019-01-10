export class TextArea {

    _loadValue() {
        chrome.storage.local.get(['html', 'css'], (value) => {
            document.querySelector('.html-input').value = value.html || '';
            document.querySelector('.css-input').value = value.css || '';
        });
    }

    _saveValue() {
        const htmlString = document.querySelector('.html-input').value;
        chrome.storage.local.set({ 'html': htmlString });

        const cssString = document.querySelector('.css-input').value;
        chrome.storage.local.set({ 'css': cssString });
    }

    init() {
        this._loadValue();
        const saveEl = document.querySelector('.action-save');
        saveEl.addEventListener('click', this._saveValue);
    }
}