window.RelayAdapters = window.RelayAdapters || {};

window.RelayAdapters.chatgpt = {
    matches: () => location.hostname === "chatgpt.com",

    findWarning: () => {
        const bodyText = document.body.innerText;
        const patterns = [
            /you'?ve reached the .* limit/i,
            /try again after/i,
            /you can continue with/i,
            /usage cap/i,
        ];
        for (const pattern of patterns) {
            const match = bodyText.match(pattern);
            if (match) return match[0];
        }
        return null;
    },
};