const logo = document.querySelector("[data-logo]");

if (logo) {
  logo.addEventListener("error", () => {
    logo.classList.add("is-missing");
  });

  if (logo.complete && logo.naturalWidth === 0) {
    logo.classList.add("is-missing");
  }
}
