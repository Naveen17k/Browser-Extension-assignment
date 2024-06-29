chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "insertText") {
        console.log("Inserting text:", message.text);
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "insertText",
                text: message.text,
            });
        });
    }
});