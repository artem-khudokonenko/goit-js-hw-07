import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgEl = document.querySelector(".gallery");
const imgSrc = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image"  src="${preview}" alt="${description}"/></a></li>`
  )
  .join("");
imgEl.innerHTML = imgSrc;


const imgModal = imgEl.addEventListener("click", modal);

function modal(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    let gallery= new SimpleLightbox(".gallery a", { captionsData: `alt`, captionDelay: 250 });
   }
