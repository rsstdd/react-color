// Initial State

import { Map } from 'immutable';

export default Map({
    // Current Colors
  currentColor: null,
  
    // Filters
  filteredColors: null,
  
    // Colors
  colorData: null,
  colorDataLoading: false,
  colorDataError: null,
  
    // Pagination
  currentPage: 1,
  tilesPerPage: 10,
});
