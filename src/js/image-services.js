const key = '20439634-6c644a175487626659667f77f';
import { loadImagerToGallery } from './updateMarkups';

export default {
  searchQuery: '',
  pageNumber: 1,
  searchRequest() {
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${key}`;

    fetch(URL)
      .then(res => res.json())
      .then(res => res.hits)
      .then(data => {
        this.pageNumber += 1;
        loadImagerToGallery(data);

        window.scrollTo({
          top: document.documentElement.offsetHeight,
          behavior: 'smooth',
        });
      });
  },
  get query() {
    return this.searchQuery;
  },
  set query(newSearchQuery) {
    this.searchQuery = newSearchQuery;
  },
  resetPage() {
    this.pageNumber = 1;
  },
};
