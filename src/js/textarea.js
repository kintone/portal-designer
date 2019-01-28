export class TextArea {

    init(value) {
        document.querySelector('.html-input').value = value.html || '';
        document.querySelector('.css-input').value = value.css || '';
        document.querySelector('.js-input').value = value.js || '';
    }

    saveValue() {
        const htmlString = document.querySelector('.html-input').value;
        chrome.storage.local.set({ 'html': htmlString });

        const cssString = document.querySelector('.css-input').value;
        chrome.storage.local.set({ 'css': cssString });

        const jsString = document.querySelector('.js-input').value;
        chrome.storage.local.set({ 'js': jsString });
    }
}
