export class TypeCheck {

    get DEFAULT() {
        return 'default';
    }

    get CUSTOMIZE() {
        return 'customize';
    }

    setValue(value) {
        const enabled = value.type === this.CUSTOMIZE;
        document.querySelector('.action-enable-customized-portal-input').checked = enabled;
    }

    getValue() {
        const enabled = document.querySelector('.action-enable-customized-portal-input').checked;
        const type = enabled ? this.CUSTOMIZE : this.DEFAULT;
        return {
            'type': type
        };
    }
}
