window.RelayAdapters = window.RelayAdapters || {};

window.RelayAdapters.gemini = {
    matches: () => location.hostname === "gemini.google.com",

    findWarning: () => {
        const bodyText = document.body.innerText;
        const patterns = [
            /you'?ve reached your limit/i,
            /limit resets? (in|at) .+/i,
            /you'?re approaching your (usage )?limit/i,
            /daily limit/i,
        ];
        for (const pattern of patterns) {
            const match = bodyText.match(pattern);
            if (match) return match[0];
        }
        return null;
    },
};