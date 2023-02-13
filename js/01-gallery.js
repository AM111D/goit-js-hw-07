import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onClickImages);

const imagesListItems = creatListImages(galleryItems);

function creatListImages(galleryItems) {
        return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>
        `
    }).join('');
    };
galleryEl.insertAdjacentHTML('afterbegin', imagesListItems);

function onClickImages(event) {
    event.preventDefault();

    const isImageEl = event.target.classList.contains('gallery__image');
    if (!isImageEl) {
        return;
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="1280" height="auto">`, {
        onShow: () => window.addEventListener("keydown", onEsc),
        onClose: () => window.removeEventListener("keydown", onEsc)
    });

    document.addEventListener("keydown", event => {
        instance.close()
    });

    function onEsc(event) {
            if (event.code === "Escape") {
                instance.close();
              }
          }
    instance.show();
  }


 


