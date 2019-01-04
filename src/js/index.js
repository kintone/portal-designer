(function() {

    function createPreviewLink() {
        const previewEl = document.createElement('a');
        previewEl.className = 'device-preview';
        previewEl.setAttribute('href', window.location.origin + '/k/m/');
        previewEl.setAttribute('aria-label', 'Open Mobile Preview');
        previewEl.setAttribute('title', 'Open Mobile Preview');
        previewEl.addEventListener('click', function(event) {
            event.preventDefault();
            chrome.runtime.sendMessage({url: location.href});
        });
        return previewEl;
    }

    const linksEl = document.querySelector('.gaia-header-toolbar-links');
    linksEl && linksEl.appendChild(createPreviewLink());
})();
