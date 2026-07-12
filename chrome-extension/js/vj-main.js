(() => {
  window.addEventListener("message", (event) => {
    if (
      event.source === window &&
      event.data.type === YTVJ_MESSAGE_TYPE_NOTIFY_VIDEO_ID &&
      "mixer" in window
    ) {
      window.mixer.setPreparedVideo(event.data.data);
    }
  });
})();
