export class TextArea {

    init(value) {
        document.querySelector('.html-input').value = value.html || '';
        document.querySelector('.css-input').value = value.css || '';
        document.querySelector('.js-input').value = value.js || '';
    }

    getValue() {
        const htmlString = document.querySelector('.html-input').value;
        const cssString = document.querySelector('.css-input').value;
        const jsString = document.querySelector('.js-input').value;
        return {
            'html': htmlString,
            'css': cssString,
            'js': jsString
        };
    }
}
