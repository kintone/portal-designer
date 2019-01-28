import { HeaderLink } from './headerlink.js';
import { CustomizedPortal } from './customizedportal.js';

function isPortalPage() {
    return /\/k\/#\/portal/.test(location.href);
}

function addDefaultClassToBody(type) {
    document.body.classList.add('kintone-portal-default');
}

function renderCustomizedPortal() {
    if (!isPortalPage()) {
        return;
    }
    chrome.storage.local.get(['type', 'html', 'css', 'js'], function (value) {
        if (!value.type || value.type === 'default') {
            addDefaultClassToBody();
            return;
        }
        new CustomizedPortal(value.html, value.css, value.js).render();
    });
}

function renderHeaderLink() {
    new HeaderLink().render();
}

renderHeaderLink();
renderCustomizedPortal();
window.addEventListener('hashchange', renderCustomizedPortal);
