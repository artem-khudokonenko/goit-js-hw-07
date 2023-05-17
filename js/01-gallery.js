import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imgEl = document.querySelector(".gallery");
const imgSrc = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="large-image.jpg"><img class="gallery__image" data-sours="${original}" src="${preview}" alt="${description}"/></a></li>`
  )
  .join("");
imgEl.innerHTML = imgSrc;

const imgModal = imgEl.addEventListener("click", modal);

function modal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const options = {
    onShow: (instance) => {
      window.addEventListener("keydown", closeByEsc);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", closeByEsc);
    },
  };
  const instance = basicLightbox.create(
    `
      <img src="${e.target.dataset.sours}" width="800" height="600">
  `,
    options
  );

  instance.show();

  function closeByEsc({ code }) {
    if (code === "Escape") {
      instance.close();
    }
  }
}
