import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const createListItemsMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`
  )
  .join("");

galleryList.innerHTML = createListItemsMarkup;
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 350,
});
