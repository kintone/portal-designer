export class ConfigInput {

    init(value) {
        document.querySelector('.config-header-color-input').value = value.headerColor || '';
        document.querySelector('.config-toolbar-color-input').value = value.toolbarColor || '';
    }

    saveValue() {
        const headerColorString = document.querySelector('.config-header-color-input').value;
        chrome.storage.local.set({ 'headerColor': headerColorString });

        const toolbarColorString = document.querySelector('.config-toolbar-color-input').value;
        chrome.storage.local.set({ 'toolbarColor': toolbarColorString });
    }
}
