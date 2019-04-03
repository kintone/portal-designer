export class NameInput {

    setValue(value) {
        document.querySelector('.name-input').value = value.name || '';
    }

    getValue() {
        const nameString = document.querySelector('.name-input').value;
        return {
            'name': nameString,
        };
    }
}
