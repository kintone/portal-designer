import { Tab } from './tab.js';
import { TextArea } from './textarea.js';
import { ConfigInput } from './configinput.js';

(() => {
    chrome.storage.local.get(['html', 'css', 'js', 'headerColor', 'toolbarColor'], (value) => {
        const tab = new Tab();
        tab.init();

        const textarea = new TextArea();
        textarea.init(value);

        const configInput = new ConfigInput();
        configInput.init(value);

        const saveEl = document.querySelector('.action-save');
        saveEl.addEventListener('click', () => {
            textarea.saveValue();
            configInput.saveValue();
        });
    });
})();
