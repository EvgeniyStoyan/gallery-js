import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const createListItemsMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a> </li>`
  )
  .join("");

galleryList.innerHTML = createListItemsMarkup;

const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
  onShow: (instance) => {
    galleryList.addEventListener("keydown", onEscKeyPress);
    console.log("open");
  },
  onClose: (instance) => {
    galleryList.removeEventListener("keydown", onEscKeyPress);
    console.log("close");
  },
});

const clickOnTheImage = (evt) => {
  evt.preventDefault();
  const sourceEvent = evt.target.dataset.source;
  if (sourceEvent) {
    instance.element().querySelector("img").src = sourceEvent;
    instance.show();
  }
  return;
};

const onEscKeyPress = (evt) => {
  console.log(evt);
  const ESC_KEY_CODE = "Escape";
  const isEscKey = evt.code === ESC_KEY_CODE;

  if (isEscKey) {
    instance.close();
  }
  return;
};

galleryList.addEventListener("click", clickOnTheImage);

// const clickOnTheImage = (evt) => {
//   evt.preventDefault();

//   if (evt.target.localName === "img") {
//     const instance = basicLightbox.create(`
//     <img src="${evt.target.dataset.source}" width="800" height="600">
// `);
//     instance.show();

//     galleryList.addEventListener("keydown", (evt) => {
//       if (evt.code === "Escape") {
//         instance.close();
//       }
//     });
//   }

//   return;
// };

galleryList.addEventListener("click", clickOnTheImage);
