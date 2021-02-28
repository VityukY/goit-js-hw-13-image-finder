import './styles.css';
import searchService from './js/image-services';
import { loadImagerToGallery } from './js/updateMarkups';

const gelleryRef = document.querySelector('#gallery');
const searchAreaRef = document.querySelector('#search-form');
const moreButtonRef = document.querySelector('#more');
const inputAreRef = document.querySelector('#inputArea');

/*let searchQuery = '';
let pageNumber = 1;*/

searchAreaRef.addEventListener('submit', e => {
  e.preventDefault();

  searchService.searchQuery = inputAreRef.value;

  gelleryRef.innerHTML = '';
  searchAreaRef.reset();

  searchService.resetPage();
  searchService
    .searchRequest()
    .then(data => loadImagerToGallery(data))
    .then(() => {
      searchService.scrolling;
      moreButtonRef.classList.remove('invisible');
    });
});

moreButtonRef.addEventListener('click', uploadImages);

function uploadImages() {
  searchService
    .searchRequest()
    .then(data => loadImagerToGallery(data))
    .then(searchService.scrolling);
}
