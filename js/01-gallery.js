import { galleryItems } from './gallery-items.js';

let instance;

// refs
const refs = {
  gallery: document.querySelector('.gallery'),
};

// create markup
const imgMarkup = createImgMarkup(galleryItems);

refs.gallery.innerHTML = imgMarkup;

function createImgMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
      <a class="gallery__link" href="${original}">

    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`,
    )
    .join('');
}

//
const imgRef = document.querySelectorAll('.gallery__image');

refs.gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}
