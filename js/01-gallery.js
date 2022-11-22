import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemsMarkup(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', cardsMarkup);



function createGalleryItemsMarkup(galleryItems) {
    return galleryItems  

    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original.value}">
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
    const source = event.target.dataset.source;
    console.log(source)
    const instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`)
    instance.show();
};

imageContainer.addEventListener('click', onImageCardClick);


