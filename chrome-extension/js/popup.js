(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#open_windows");
    btn.addEventListener("click", () => {
      chrome.windows.create({
        url: YTVJ_ORIGIN,
        type: "popup",
        width: 960,
        height: 540,
      });
    });
  });
})();
