const CHECK_INTERVAL_MS = 3000;

function getActiveAdapter() {
    const adapters = window.RelayAdapters || {};
    for (const key in adapters) {
        if (adapters[key].matches()) {
            return adapters[key];
        }
    }
    return null;
}

function notifyUser(warningText) {
    const existing = document.getElementById("relay-usage-banner");
    if (existing) existing.remove();

    const banner = document.createElement("div");
    banner.id = "relay-usage-banner";
    banner.textContent = `Relay: ${warningText}`;
    banner.style.cssText = `
    position: fixed;
    top: 16px;
    right: 16px;
    background: #d97706;
    color: white;
    padding: 10px 16px;
    border-radius: 8px;
    font-family: sans-serif;
    font-size: 13px;
    z-index: 999999;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  `;

    document.body.appendChild(banner);
    setTimeout(() => banner.remove(), 8000);
}

function checkForWarning() {
    const adapter = getActiveAdapter();
    if (!adapter) return;

    const warningText = adapter.findWarning();
    if (warningText) {
        notifyUser(warningText);
    }
}

setInterval(checkForWarning, CHECK_INTERVAL_MS);