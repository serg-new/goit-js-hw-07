// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 

import { galleryItems } from "./gallery-items.js";

// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const imagesEL = galleryItems
.map(({ preview, original, description }) => {
return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"/>
</a>
</li>`;
})
    .join("");

galleryEl.innerHTML = imagesEL;
galleryEl.addEventListener("click", onGalleryClick);
function onGalleryClick(e) {
e.preventDefault();
if (e.target.nodeName !== "IMG") {
    return;
}
    // підключення бібліотеки 
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}"
width='800' >`);
    instance.show();



    // закриття
galleryEl.addEventListener("keydown", (event) => {
if (event.code === "Escape") {
instance.close();
}

});

}





