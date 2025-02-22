// Required for Manifest V3, but no background logic needed here
chrome.runtime.onInstalled.addListener(() => {
    console.log('LinkedIn Text Formatter installed');
});