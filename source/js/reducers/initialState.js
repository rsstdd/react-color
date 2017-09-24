// Initial State

import { Map } from 'immutable';

export default Map({
  pager: {},
  pageOfItems: [],
  
  currentColor: null,
  filterColor: null,
  
  colorData: null,
  colorDataLoading: false,
  colorDataError: null,
  
  currentPage: 1,
  tilesPerPage: 10,
  
});
