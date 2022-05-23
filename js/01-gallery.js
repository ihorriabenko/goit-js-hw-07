import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const imgMarkup = createImgMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imgMarkup);

function createImgMarkup(items) {
    return items.map(
        ({
            original,
            preview,
            description,
        }) => `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>`,
    ).join('');
}
