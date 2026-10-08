(function () {
  'use strict';

  function protectedPanelURL(value) {
    // Permit one HTTPS tunnel host only. No ports, credentials, other paths,
    // query strings, fragments, whitespace or URL-parser normalization tricks.
    if (typeof value !== 'string' || value.length > 100 ||
        !/^https:\/\/[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.trycloudflare\.com\/?$/.test(value)) return null;
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:' || url.port || url.username || url.password ||
          url.pathname !== '/' || url.search || url.hash ||
          !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.trycloudflare\.com$/.test(url.hostname)) return null;
      return url.href;
    } catch (_) {
      return null;
    }
  }

  async function loadConnection() {
    const link = document.getElementById('open-panel');
    const state = document.getElementById('connection-state');
    const detail = document.getElementById('connection-detail');
    try {
      const response = await fetch('connection.json', {
        cache: 'no-store', credentials: 'omit', mode: 'same-origin', redirect: 'error'
      });
      if (!response.ok) throw new Error('unavailable');
      const connection = await response.json();
      const url = protectedPanelURL(connection && connection.url);
      if (!url) throw new Error('unavailable');
      link.href = url;
      link.setAttribute('aria-disabled', 'false');
      link.tabIndex = 0;
      document.body.dataset.connection = 'available';
      state.textContent = 'Link disponibile';
      detail.textContent = 'La disponibilità del Mac viene confermata aprendo il pannello protetto.';
    } catch (_) {
      link.removeAttribute('href');
      link.setAttribute('aria-disabled', 'true');
      link.tabIndex = -1;
      document.body.dataset.connection = 'unavailable';
      state.textContent = 'Link non disponibile';
      detail.textContent = 'Attiva o rinnova il collegamento dal Mac di casa, poi aggiorna questa pagina.';
    }
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = Object.freeze({ protectedPanelURL });
  } else {
    void loadConnection();
  }
})();
