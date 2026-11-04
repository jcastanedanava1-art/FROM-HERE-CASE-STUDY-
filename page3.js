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

const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const closeButton = document.querySelector("#closeLightbox");
const previousButton = document.querySelector("#previousImage");
const nextButton = document.querySelector("#nextImage");

let currentImageIndex = 0;

function showImage(index) {
  currentImageIndex = (index + galleryItems.length) % galleryItems.length;

  const item = galleryItems[currentImageIndex];
  const image = item.querySelector("img");

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = item.dataset.caption;

  if (!lightbox.open) {
    lightbox.showModal();
  }
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => showImage(index));
});

previousButton.addEventListener("click", () => {
  showImage(currentImageIndex - 1);
});

nextButton.addEventListener("click", () => {
  showImage(currentImageIndex + 1);
});

closeButton.addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});