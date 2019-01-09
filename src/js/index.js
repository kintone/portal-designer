import {HeaderLink} from './headerlink.js';
import {CustomizedPortal} from './customizedportal.js';

function isPortalPage() {
    return /\/k\/#\/portal/.test(location.href);
}

function renderCustomizedPortal() {
    if (!isPortalPage()) {
        return;
    }
    chrome.storage.local.get(['type', 'html', 'css'], function(value) {
        if (value.type && value.type === 'default') {
            return;
        }
        new CustomizedPortal(value.html, value.css).render();
    });
}

function renderHeaderLink() {
    if (!isPortalPage()) {
        return;
    }
    new HeaderLink().render();
}

renderHeaderLink();
renderCustomizedPortal();
window.addEventListener('hashchange', () => {
    renderCustomizedPortal();
});
