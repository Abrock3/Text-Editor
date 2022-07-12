const butInstall = document.getElementById("buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.remove("hidden", false);
});

butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
});

window.addEventListener("appinstalled", (event) => {
  butInstall.classList.add("hidden");
  window.deferredPrompt = null;
});

window
  .matchMedia("(display-mode: standalone)")
  .addEventListener("change", (evt) => {
    if (evt.matches) {
      butInstall.classList.add("hidden");
    }
  });
