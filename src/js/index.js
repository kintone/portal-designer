(() => {
    chrome.storage.local.get('type', function(value) {
        if (value.type && value.type === 'default') {
            return;
        }

        function initCustomizePortal() {
            const portalIndexEl = document.querySelector('.ocean-portal-index');
            if (!portalIndexEl) {
                return;
            }

            Array.prototype.forEach.call(portalIndexEl.children, (el) => {
                el.style.display = 'none';
            });

            const shadowEl = portalIndexEl.attachShadow({mode: 'closed'});
    
            const customizeEl = document.createElement('div');
            customizeEl.classList.add('kintone-portal-customize');
            shadowEl.appendChild(customizeEl);
        
            chrome.storage.local.get(['html', 'css'], function(value) {
                const styleEl = document.createElement('style');
                styleEl.innerText = value.css;
                customizeEl.appendChild(styleEl);
        
                const innerEl = document.createElement('div');
                innerEl.innerHTML = value.html
                customizeEl.appendChild(innerEl);
            });
        }
    
        initCustomizePortal();
    
        // ポータル画面でないか、まだポータルがロードされていなかったときは、ロードされるまで待つ
        const bodyOceanEl = document.querySelector('#contents-body-ocean');
        if (bodyOceanEl) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    const addNodes = mutation.addedNodes;
                    if (addNodes[0] && addNodes[0].classList.contains('ocean-portal-index')) {
                        initCustomizePortal();
                        observer.disconnect();
                    };
                });
              });
            observer.observe(bodyOceanEl, { childList: true });
        }
    
        function createCustomizePortalLink() {
            const anchorEl = document.createElement('a');
            anchorEl.className = 'customize-portal';
            anchorEl.setAttribute('href', chrome.extension.getURL('html/customize.html'));
            anchorEl.setAttribute('target', '_blank');
            anchorEl.setAttribute('aria-label', 'Customize Portal');
            anchorEl.setAttribute('title', 'Customize portal');
            return anchorEl;
        }
    
        const linksEl = document.querySelector('.gaia-header-toolbar-links');
        linksEl && linksEl.appendChild(createCustomizePortalLink());
    });
})();
