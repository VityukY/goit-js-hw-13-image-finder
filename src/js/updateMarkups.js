import imgCardTemplates from '../tamplates/card.hbs';
const gelleryRef = document.querySelector('#gallery');

const loadImagerToGallery = data => {
  const markup = imgCardTemplates(data);
  gelleryRef.insertAdjacentHTML('beforeend', markup);
};
export { loadImagerToGallery };
