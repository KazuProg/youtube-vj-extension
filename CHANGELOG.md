# Changelog

- - -
## [v1.2.1](https://github.com/KazuProg/youtube-vj-extension/compare/ca2bd4de3a4430c1bd5bb08437c4ff35889361ae..v1.2.1) - 2026-07-12
#### Code Refactoring
- extract shared message type and origin URL constants - ([d8781a6](https://github.com/KazuProg/youtube-vj-extension/commit/d8781a6fe9df91c770ae498f28041ff43a6863e3)) - KazuProg
#### Continuous Integration
- package chrome-extension as a release zip asset - ([faf848a](https://github.com/KazuProg/youtube-vj-extension/commit/faf848a3509911bef34c9439de63501afe3c713f)) - KazuProg
- add fixup commit check and bump-level labeling - ([7919024](https://github.com/KazuProg/youtube-vj-extension/commit/7919024b66556feaeaa8fcecfb8bdc8f31a6b8d5)) - KazuProg
- add cocogitto-based release automation - ([ca2bd4d](https://github.com/KazuProg/youtube-vj-extension/commit/ca2bd4de3a4430c1bd5bb08437c4ff35889361ae)) - KazuProg

- - -

## [1.2.0] - 2026-07-05

### Added

- Hide caption window on projection embeds

## [1.1.0] - 2026-06-10

### Added

- Hide YouTube player controls on projection embeds

## [1.0.0] - 2026-01-17

### Added

- Chrome extension for YouTube-VJ integration
  - Popup UI to open the YouTube-VJ controller in a popup window
  - YouTube page content script to detect and store video ID changes
  - VJ app content scripts to receive video ID updates via postMessage
- Documentation with an installation guide and screenshots
