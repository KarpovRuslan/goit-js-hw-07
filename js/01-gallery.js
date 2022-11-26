import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemsMarkup(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', cardsMarkup);

imageContainer.addEventListener('click', onImageCardClick);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems  

    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </div>`;
    })
        .join('');
}

function onImageCardClick (event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`)
    instance.show();

    const onKeydownEscape = event => {
        console.log(event.code);
        if (event.code === 'Escape') {
            instance.close();
        }
    };
    window.addEventListener('keydown', onKeydownEscape);
};






