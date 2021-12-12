import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const galleryDiv = document.querySelector('.gallery');

const galleryImages = galleryItems.map((item) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
).join('');

galleryDiv.insertAdjacentHTML('beforeend', galleryImages);

function modalImagesOpen(imagesLink) {
    const instance = basicLightbox.create(`
    <img src="${imagesLink}" width="800" height="600">`)
    instance.show()
    closeModalEsc(instance)
}

function closeModalEsc(instance) {
    if (basicLightbox.visible()) {
        window.addEventListener('keydown', () => {
            if (event.key === 'Escape') {
                instance.close()
            }
        })
    }
}
function onImagesGallary(e) {
    e.preventDefault();
    document.querySelector('a.gallery__link')
    let imagesLink = e.target.dataset.source;
    modalImagesOpen(imagesLink)
};

galleryDiv.addEventListener('click', onImagesGallary)