export class ConfigInput {

    init(value) {
        document.querySelector('.config-header-color-input').value = value.headerColor || '';
        document.querySelector('.config-toolbar-color-input').value = value.toolbarColor || '';
    }

    getValue() {
        const headerColorString = document.querySelector('.config-header-color-input').value;
        const toolbarColorString = document.querySelector('.config-toolbar-color-input').value;
        return {
            'headerColor': headerColorString,
            'toolbarColor': toolbarColorString
        };
    }
}
