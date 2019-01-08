(() => {

    function loadTextAreaValue() {
        let htmlString = chrome.storage.local.get(['html', 'css'], (value) => {
            document.querySelector('.html-input').value = value.html || '';
            document.querySelector('.css-input').value = value.css || '';
        });
    }

    function saveTextAreaValue() {
        let htmlString = document.querySelector('.html-input').value;
        chrome.storage.local.set({'html': htmlString});

        let cssString = document.querySelector('.css-input').value;
        chrome.storage.local.set({'css': cssString});
    }

    loadTextAreaValue(); 
    var saveEl = document.querySelector('.action-save');
    saveEl.addEventListener('click', saveTextAreaValue);



    function unSelectedAllTabs() {
        const tabs = document.querySelectorAll('.tab');
        Array.prototype.forEach.call(tabs, (tabEl) => {
            tabEl.setAttribute('aria-selected', false);
        });

        const panels = document.querySelectorAll('.tabpanel');
        Array.prototype.forEach.call(panels, (panelEl) => {
            panelEl.setAttribute('hidden', 'hidden');
        });
    }

    function selectTab(tabEl) {
        tabEl.setAttribute('aria-selected', true);
        const tabPanel = document.getElementById(tabEl.getAttribute('aria-controls'));
        tabPanel.removeAttribute('hidden');
    }

    unSelectedAllTabs();
    selectTab(document.querySelector('.html-tab'));
    const tabs = document.querySelectorAll('.tab');
    Array.prototype.forEach.call(tabs, (tabEl) => {
        tabEl.addEventListener('click', (event) => {
            unSelectedAllTabs();
            selectTab(event.target);
        });
    });

})();
