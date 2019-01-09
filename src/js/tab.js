export class Tab {

    _unSelectedAllTabs() {
        const tabs = document.querySelectorAll('.tab');
        Array.prototype.forEach.call(tabs, (tabEl) => {
            tabEl.setAttribute('aria-selected', false);
        });

        const panels = document.querySelectorAll('.tabpanel');
        Array.prototype.forEach.call(panels, (panelEl) => {
            panelEl.setAttribute('hidden', 'hidden');
        });
    }

    _selectTab(tabEl) {
        tabEl.setAttribute('aria-selected', true);
        const tabPanel = document.getElementById(tabEl.getAttribute('aria-controls'));
        tabPanel.removeAttribute('hidden');
    }

    _addOnClickEventListener() {
        const tabs = document.querySelectorAll('.tab');
        Array.prototype.forEach.call(tabs, (tabEl) => {
            tabEl.addEventListener('click', (event) => {
                this._unSelectedAllTabs();
                this._selectTab(event.target);
            });
        });
    }

    init() {
        this._unSelectedAllTabs();
        this._selectTab(document.querySelector('.html-tab'));
        this._addOnClickEventListener();
    }
}
