# WebPage pdf converter

Lightweight converter from webpage into PDF. This project is now based on [google puppetter](https://github.com/GoogleChrome/puppeteer), but maybe we can fork from it and can be more stable and lighter in further.

## How to use
1. Clone this project on your local
2. `yarn install`
3. `yarn start`, and follow instructions in binary

## Issues
* Prettify
    * Since this project was started to make PDF from VSCODE MarkDown WebView, we didn't consider any design of result file.
    * There may be plenty of issues!
* CLI Packaging
    * To get rid of using in nodeJS + no-shortcut environment, CLI packaging is needed.
    * It is not available to pack this project to single binary due to Puppeteer Chronium. It is not available to included in package by using [`zeit/pkg` module](https://github.com/zeit/pkg). If we resolve this issue, we can distribute more light package on CLI.
* GUI Tool
    * Command Line Interface(CLI) is still to hard for non-developers. We are looking for composing GUI on google chrome extension. It may be free from the chromium which puppetter needs.

### Free to add issues or PR!

