# Text Formatter Chrome Extension

A Chrome extension that enables real-time text formatting on LinkedIn using keyboard shortcuts, converting selected text into Unicode bold characters.

## Features

- **Quick Formatting**: Format text instantly using `Ctrl + Shift + B` (Windows) or `Command + Shift + B` (Mac)
- **Unicode Bold Characters**: Transform regular text into bold Unicode characters that render properly on LinkedIn
- **Universal Compatibility**: Works seamlessly in both standard text inputs and rich text (contenteditable) areas
- **Smart Cursor Handling**: Maintains cursor position after text formatting
- **User Feedback**: Provides visual confirmation when text formatting is applied

## Installation

### From Source
1. Clone the repository:
   ```bash
   git clone https://github.com/theGBguy/TextFormatter.git
   cd TextFormatter
   ```

2. Load in Chrome:
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right)
   - Click "Load unpacked"
   - Select the `TextFormatter` directory

### Usage
1. Visit LinkedIn in your Chrome browser
2. Select any text in an input field or text area
3. Press `Ctrl + Shift + B` (Windows) or `Command + Shift + B` (Mac)
4. The selected text will be instantly converted to bold Unicode characters

## Technical Overview

### Architecture
The extension follows a simple but effective architecture:
- Content script monitors for keyboard shortcuts and text selection
- Character mapping system converts standard characters to Unicode bold
- Event handling ensures LinkedIn properly recognizes text changes
- Cursor position management maintains a natural typing experience

### Core Files
- `manifest.json` - Extension configuration and permissions
- `content.js` - Main logic for text handling and formatting
- `background.js` - Minimal service worker for Manifest V3 compliance
- `styles.css` - Optional styling for notification feedback

## Development

### Prerequisites
- Chrome browser
- Basic understanding of JavaScript and Chrome Extension APIs
- Text editor or IDE of your choice

### Local Setup
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/theGBguy/TextFormatter.git
   ```
3. Make your changes
4. Test locally using Chrome's "Load unpacked" feature
5. Submit a pull request with your improvements

### Testing
1. Load the extension in Chrome
2. Visit LinkedIn and test in various text input scenarios:
   - Status updates
   - Comments
   - Messages
   - Article editor

## Contributing

Contributions are welcome! Here's how you can help:

1. Check existing issues or create a new one
2. Fork the repository
3. Create a feature branch (`git checkout -b feature/amazing-feature`)
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Chiranjeevi Pandey & Deepseek