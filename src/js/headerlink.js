export class HeaderLink {

    constructor() { };

    render() {
        const anchorEl = document.createElement('a');
        anchorEl.className = 'customize-portal';
        anchorEl.setAttribute('href', chrome.extension.getURL('html/editorpage.html'));
        anchorEl.setAttribute('target', '_blank');
        anchorEl.setAttribute('aria-label', 'Customize Portal');
        anchorEl.setAttribute('title', 'Customize portal');

        const linksEl = document.querySelector('.gaia-header-toolbar-links');
        linksEl && linksEl.appendChild(anchorEl);
    }
}
