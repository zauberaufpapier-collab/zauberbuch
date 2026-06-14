(() => {
  const fallback = document.getElementById("popup-fallback");
  const fallbackLink = document.getElementById("popup-fallback-link");
  const closeButton = document.getElementById("popup-close");
  const fallbackTitle = fallback?.querySelector("h2");
  const fallbackText = fallback?.querySelector(".text");

  const showFallback = ({ title, text, href, label, target = "_blank" }) => {
    if (!fallback || !fallbackLink) return;

    if (fallbackTitle) fallbackTitle.textContent = title;
    if (fallbackText) fallbackText.textContent = text;
    fallbackLink.href = href;
    fallbackLink.textContent = label;

    if (target) {
      fallbackLink.target = target;
      fallbackLink.rel = "noopener";
    } else {
      fallbackLink.removeAttribute("target");
      fallbackLink.removeAttribute("rel");
    }

    fallback.showModal();
  };

  document.querySelectorAll("a[data-popup-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const popup = window.open(
        link.href,
        "zauberAufPapierPopup",
        "popup=yes,width=1040,height=780,left=120,top=70"
      );

      if (popup) {
        popup.opener = null;
        popup.focus();
        return;
      }

      showFallback({
        title: "Der Zauber wartet",
        text: "Falls dein Browser Popups blockiert, kannst du den Link hier öffnen.",
        href: link.href,
        label: "Link öffnen",
      });
    });
  });

  closeButton?.addEventListener("click", () => fallback?.close());
})();
