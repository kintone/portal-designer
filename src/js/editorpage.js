import { Tab } from './tab.js';
import { TextArea } from './textarea.js';
import { ConfigInput } from './configinput.js';

(() => {
    const download = (filename, text) => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    };

    chrome.storage.local.get(['html', 'css', 'js', 'headerColor', 'toolbarColor'], (value) => {
        const tab = new Tab();
        tab.init();

        const textarea = new TextArea();
        textarea.init(value);

        const configInput = new ConfigInput();
        configInput.init(value);

        const saveEl = document.querySelector('.action-save');
        saveEl.addEventListener('click', () => {
            const values = Object.assign(textarea.getValue(), configInput.getValue());
            chrome.storage.local.set(values);
        });

        const exportEl = document.querySelector('.action-export');
        exportEl.addEventListener('click', () => {
            const values = Object.assign(textarea.getValue(), configInput.getValue());
            chrome.storage.local.set(values); // 必ずsaveする.
            download('customize.json', JSON.stringify(values));
        });
    });
})();
