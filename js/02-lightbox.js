import { galleryItems } from './gallery-items.js';
// Change code below this line

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
      ({
        original,
        preview,
        description,
      }) => `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description} " />
    </a>`,
    )
    .join('');
}


let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
