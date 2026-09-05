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
        ]; window.RelayAdapters = window.RelayAdapters || {};

        window.RelayAdapters.claude = {
            matches: () => location.hostname === "claude.ai",

            findWarning: () => {
                const bodyText = document.body.innerText;
                const patterns = [
                    /you have reached your message limit(?: until [\d:apm\s]+)?/i,
                    /you'?ve hit your session limit(?:\s*[∙•]\s*resets at [\d:apm\s]+)?/i,
                    /resets at \d{1,2}:\d{2}\s*(am|pm)/i,
                    /message limit/i,
                ];
                for (const pattern of patterns) {
                    const match = bodyText.match(pattern);
                    if (match) return match[0];
                }
                return null;
            },
        };
        for (const pattern of patterns) {
            const match = bodyText.match(pattern);
            if (match) return match[0];
        }
        return null;
    },
};