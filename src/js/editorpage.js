import { Tab } from './tab.js';
import { TypeCheck } from './typecheck.js';
import { NameInput } from './nameinput.js';
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

    chrome.storage.local.get(['type', 'name', 'html', 'css', 'js', 'headerColor', 'toolbarColor'], (value) => {
        const tab = new Tab();
        tab.init();

        const typeCheck = new TypeCheck();
        typeCheck.setValue(value);

        const nameInput = new NameInput();
        nameInput.setValue(value);

        const textarea = new TextArea();
        textarea.setValue(value);

        const configInput = new ConfigInput();
        configInput.setValue(value);

        const saveEl = document.querySelector('.action-save');
        saveEl.addEventListener('click', () => {
            const values = Object.assign(typeCheck.getValue(), nameInput.getValue(), textarea.getValue(), configInput.getValue());
            chrome.storage.local.set(values);
        });

        const cancelEl = document.querySelector('.action-cancel');
        cancelEl.addEventListener('click', () => {
            window.open('about:blank','_self').close();
        });

        const importEl = document.querySelector('.action-import');
        const reader = new FileReader();
        reader.addEventListener('load', (evt) => {
            const value = JSON.parse(evt.target.result);
            typeCheck.setValue(value);
            nameInput.setValue(value);
            textarea.setValue(value);
            configInput.setValue(value);
            importEl.value = '';
        });

        importEl.addEventListener('change', () => {
            reader.readAsText(event.target.files[0]);
        });

        const exportEl = document.querySelector('.action-export');
        exportEl.addEventListener('click', () => {
            const values = Object.assign(nameInput.getValue(), textarea.getValue(), configInput.getValue(), { 'customize_version': 1 });
            chrome.storage.local.set(values); // 必ずsaveする.
            download('customize.json', JSON.stringify(values));
        });
    });
})();
