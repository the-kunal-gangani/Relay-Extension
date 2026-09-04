window.RelayAdapters = window.RelayAdapters || {};

window.RelayAdapters.claude = {
    matches: () => location.hostname === "claude.ai",

    findWarning: () => {
        const bodyText = document.body.innerText;
        const patterns = [
            /you have \d+ messages? left/i,
            /you'?ll have more messages/i,
            /resets? at/i,
            /approaching your usage limit/i,
            /usage limit/i,
        ];
        for (const pattern of patterns) {
            const match = bodyText.match(pattern);
            if (match) return match[0];
        }
        return null;
    },
};