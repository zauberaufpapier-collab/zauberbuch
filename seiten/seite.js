(() => {
  const fallback = document.getElementById("popup-fallback");
  const fallbackLink = document.getElementById("popup-fallback-link");
  const closeButton = document.getElementById("popup-close");

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

      fallbackLink.href = link.href;
      fallback.showModal();
    });
  });

  closeButton?.addEventListener("click", () => fallback.close());
})();
