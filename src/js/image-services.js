const key = '20439634-6c644a175487626659667f77f';

export default {
  searchQuery: '',
  pageNumber: 1,
  async searchRequest() {
    try {
      const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${key}`;

      const result = await fetch(URL);
      const imagesHits = await result.json();
      const imagesArray = await imagesHits.hits;
      this.pageNumber += 1;

      return imagesArray;
    } catch (err) {
      console.log(err);
    }
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
  scrolling() {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  },
};
