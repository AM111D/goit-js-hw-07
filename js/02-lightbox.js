import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const imagesListItems = creatListImages(galleryItems);

function creatListImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${preview}">
        <img class="gallery__image" src="${original}" alt="${description}" />
      </a>
        `;
    })
    .join("");
}
galleryEl.insertAdjacentHTML("afterbegin", imagesListItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
