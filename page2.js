const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const vinylRecord = document.querySelector("#vinylRecord");

if (vinylRecord) {
  vinylRecord.addEventListener("click", () => {
    const isSpinning = vinylRecord.classList.toggle("is-spinning");
    vinylRecord.setAttribute("aria-pressed", isSpinning);
  });
}