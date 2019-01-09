export class CustomizedPortal {

    constructor(html, css) {
        this.html = html;
        this.css = css;
    }

    _getPortalIndexElementDirectly() {
        return document.querySelector('.ocean-portal-index');
    }

    _getPortalIndexElement() {
        return new Promise((resolve => {
            const portalIndexEl = this._getPortalIndexElementDirectly();
            if (portalIndexEl) {
                resolve(portalIndexEl);
            }

            new MutationObserver(() => {
                const portalIndexEl = this._getPortalIndexElementDirectly();
                if (portalIndexEl) {
                    resolve(portalIndexEl);
                }
            }).observe(document.querySelector('#contents-body-ocean'), { childList: true });
        }));
    }

    _hideDefaultPortal(portalIndexEl) {
        Array.prototype.forEach.call(portalIndexEl.children, (el) => {
            el.style.display = 'none';
        });
    }

    _createEntryPoint(portalIndexEl) {
        const shadowEl = portalIndexEl.attachShadow({mode: 'closed'});
        const entryEl = document.createElement('div');
        entryEl.classList.add('kintone-portal-customize');
        shadowEl.appendChild(entryEl);
        return entryEl;
    }

    _renderCustomizeTo(entryPointEl) {
        const styleEl = document.createElement('style');
        styleEl.innerText = this.css;
        entryPointEl.appendChild(styleEl);

        const innerEl = document.createElement('div');
        innerEl.innerHTML = this.html
        entryPointEl.appendChild(innerEl);
    }

   async render() {
        const portalIndexEl = await this._getPortalIndexElement();
        this._hideDefaultPortal(portalIndexEl);
        this._renderCustomizeTo(this._createEntryPoint(portalIndexEl));
    }
}