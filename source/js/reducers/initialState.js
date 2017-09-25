// Initial State

import { Map } from 'immutable';

export default Map({
    // Current Colors
  currentColor: null,
  
    // Filters
  filteredColors: null,
  searchTerm: '',
  
    // Colors
  colorData: null,
  colorDataLoading: false,
  colorDataError: null,
  
    // Pagination // TODO Integrate pagination into Redux
  currentPage: 1,
  tilesPerPage: 10,
});
