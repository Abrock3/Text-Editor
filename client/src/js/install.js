const butInstall = document.getElementById("buttonInstall");

//
window.addEventListener("beforeinstallprompt", (event) => {
  // Saves the "beforeInstallPromptEvent" event to the window object to be used later, at a time of the user's choosing
  window.deferredPrompt = event;
  // Makes the install button visible
  butInstall.classList.remove("hidden");
});

// listens for the user to click the install button
butInstall.addEventListener("click", async () => {
  // retrieves the "beforeInstallPromptEvent" stored above
  const promptEvent = window.deferredPrompt;
  // returns if the window didn't have deferredPrompt within it
  if (!promptEvent) {
    return;
  }
  // prompts the user to install the PWA
  promptEvent.prompt();
  // sets deferredPrompt to null so it can be garbage collected
  window.deferredPrompt = null;
});

// once the app is installed, the install button gets hidden and deferredPrompt gets 
window.addEventListener("appinstalled", (event) => {
  butInstall.classList.add("hidden");
  window.deferredPrompt = null;
});

// listens for a change in the display mode of the browser, and if it's standalone it will hide the install button
window
  .matchMedia("(display-mode: standalone)")
  .addEventListener("change", (evt) => {
    if (evt.matches) {
      butInstall.classList.add("hidden");
    }
  });
