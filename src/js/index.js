import { HeaderLink } from './headerlink.js';
import { CustomizedPortal } from './customizedportal.js';

function isPortalPage() {
    return /\/k\/#\/portal/.test(location.href);
}

function addDefaultClassToBody(type) {
    document.body.classList.add('kintone-portal-default');
}

function _updateHeaderColor(headerColor) {
    const headerEl = document.querySelector('.gaia-header-header');
    headerEl.style.visibility = 'visible';
    if (headerColor) {
        headerEl.style.backgroundColor = headerColor;
    }
}

function _updateToolbarColor(toolbarColor) {
    const toolbarEl = document.querySelector('.gaia-header-toolbar');
    toolbarEl.style.visibility = 'visible';
    if (toolbarColor) {
        toolbarEl.style.backgroundColor = toolbarColor;
    }
}

function renderCustomizedPortal() {
    if (!isPortalPage()) {
        return;
    }
    chrome.storage.local.get(['type', 'html', 'css', 'js', 'headerColor', 'toolbarColor'], (value) => {
        if (!value.type || value.type === 'default') {
            addDefaultClassToBody();
            return;
        }
        new CustomizedPortal(value.html, value.css, value.js).render();
        _updateHeaderColor(value.headerColor);
        _updateToolbarColor(value.toolbarColor);
    });
}

function renderHeaderLink() {
    new HeaderLink().render();
}

renderHeaderLink();
renderCustomizedPortal();
window.addEventListener('hashchange', renderCustomizedPortal);
