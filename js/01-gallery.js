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

function onImageCardClick(event) {
    if (!event.target.classList.contains('gallery__item')) {
        return;
    }
     console.log(event.target)
}


