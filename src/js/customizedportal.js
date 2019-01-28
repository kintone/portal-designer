export class CustomizedPortal {

    constructor(html, css, js) {
        this.html = html || '';
        this.css = css || '';
        this.js = js || '';
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

    _createEntryPointElement() {
        const entryEl = document.createElement('div');
        entryEl.classList.add('kintone-portal-customize');
        return entryEl;
    }

    _renderCustomizeTo(entryPointEl) {
        const styleEl = document.createElement('style');
        styleEl.innerHTML = this.css;
        entryPointEl.appendChild(styleEl);

        const innerEl = document.createElement('div');
        innerEl.innerHTML = this.html;
        entryPointEl.appendChild(innerEl);

        const scriptEl = document.createElement('script');
        scriptEl.innerHTML = this.js;
        entryPointEl.appendChild(scriptEl);
    }

    async render() {
        const portalIndexEl = await this._getPortalIndexElement();
        const entryPointEl = this._createEntryPointElement();
        portalIndexEl.appendChild(entryPointEl);
        this._renderCustomizeTo(entryPointEl);
    }
}
