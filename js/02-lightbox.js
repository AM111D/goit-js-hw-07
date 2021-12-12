import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');

const galleryImages = galleryItems.map((item) =>
    `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
).join('');
galleryDiv.insertAdjacentHTML('beforeend', galleryImages);

lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt'
}
);
