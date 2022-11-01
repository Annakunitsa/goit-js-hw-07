import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector('.gallery');

const imgMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
  })
  .join('');

divGallery.insertAdjacentHTML('beforeend', imgMarkup);

// https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js

// divGallery.addEventListener('click', event => {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   const clickedImg = event.target.getAttribute('data-source');
//   const instance = basicLightbox.create(`img src="${clickedImg}"`);
//   instance.show();

//   divGallery.addEventListener('keydown', event => {
//     if (event.key === 'Escape') {
//       instance.close();
//     }
//   });
// });

divGallery.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  if (event.taget === event.currentTarget) return;

  const currentImage = event.target;
  console.log(`"currentImage:"${currentImage.dataset.source}`);

  const instance = basicLightbox.create(
    `
    <div class='modal'><img src="${currentImage.dataset.source}" width=600/></div>`
  );
  instance.show();

  divGallery.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}
