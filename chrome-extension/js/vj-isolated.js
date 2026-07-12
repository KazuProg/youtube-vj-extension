(() => {
  chrome.storage.onChanged.addListener((changes, _namespace) => {
    if (changes.videoId) {
      window.postMessage(
        {
          type: YTVJ_MESSAGE_TYPE_NOTIFY_VIDEO_ID,
          data: changes.videoId.newValue,
        },
        YTVJ_ORIGIN
      );
    }
  });
})();
