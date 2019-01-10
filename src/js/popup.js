(() => {
    const DEFAULT = 'default';
    const CUSTOMIZE = 'customize';

    chrome.storage.local.get('type', (value) => {
        const type = value.type || CUSTOMIZE;
        const checkedRadioEl = document.querySelector('.popup-radio-input[value=' + type + ']');
        checkedRadioEl.checked = true;
    });

    const formEl = document.querySelector('.popup-form');
    formEl.addEventListener('change', (evt) => {
        chrome.storage.local.set({ 'type': evt.target.value });
    });
})();