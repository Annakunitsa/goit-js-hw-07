import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector('.gallery');

const imgMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a a class="gallery__item" href = "${original}" ><img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join('');
console.log(imgMarkup);

ulGallery.insertAdjacentHTML('beforeend', imgMarkup);

// lightbox

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
