const boldMap = {
    'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲',
    'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷',
    'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼',
    'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁',
    'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆',
    'z': '𝘇', 'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗',
    'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜',
    'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡',
    'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦',
    'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫',
    'Y': '𝗬', 'Z': '𝗭', '0': '𝟬', '1': '𝟭', '2': '𝟮',
    '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳',
    '8': '𝟴', '9': '𝟵'
};

function showNotification() {
    const notification = document.createElement('div');
    notification.textContent = 'Text formatted!';
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '10px 20px';
    notification.style.background = '#0077b5';
    notification.style.color = 'white';
    notification.style.borderRadius = '4px';
    notification.style.zIndex = '10000';
    notification.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

function convertToBold(text) {
    return text.split('').map(char => boldMap[char] || char).join('');
}

function handleKeyPress(event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'b') {
        event.preventDefault();
        const activeElement = document.activeElement;
        const isContentEditable = activeElement.isContentEditable;
        const isInput = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';

        if (!isInput && !isContentEditable) return;

        const selection = window.getSelection();
        let text = selection.toString();

        if (!text) return;

        const boldText = convertToBold(text);

        if (isInput) {
            const start = activeElement.selectionStart;
            const end = activeElement.selectionEnd;
            activeElement.value = activeElement.value.slice(0, start) + boldText + activeElement.value.slice(end);
            activeElement.selectionStart = activeElement.selectionEnd = start + boldText.length;
        } else if (isContentEditable) {
            const range = selection.getRangeAt(0);
            range.deleteContents();
            const textNode = document.createTextNode(boldText);
            range.insertNode(textNode);
            selection.removeAllRanges();
            const newRange = document.createRange();
            newRange.setStart(textNode, boldText.length);
            newRange.setEnd(textNode, boldText.length);
            selection.addRange(newRange);
        }

        activeElement.dispatchEvent(new Event('input', { bubbles: true }));
        showNotification();
    }
}

document.addEventListener('keydown', handleKeyPress);