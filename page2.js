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

const vinylRecordButton = document.getElementById("vinylRecord");
const oneWayAudio = document.getElementById("oneWayAudio");

if (vinylRecordButton) {
  vinylRecordButton.addEventListener("click", () => {
    const isSpinning =
      vinylRecordButton.classList.toggle("is-spinning");

    vinylRecordButton.setAttribute("aria-pressed", isSpinning);

    if (!oneWayAudio) return;

    if (isSpinning) {
      oneWayAudio.currentTime = 0;
      oneWayAudio.play().catch((error) => {
        console.error("The audio file could not be played:", error);
      });
    } else {
      oneWayAudio.pause();
    }
  });
}

