// Initial State

import { Map } from 'immutable';

export default Map({
  pager: {},
  pageOfItems: [],
  
  currentColor: null,
  colorHues: null,
  
  colorData: null,
  colorDataLoading: false,
  colorDataError: null,

  colorIdData: null,
  colorDataIdLoading: false,
  colorDataIdError: null,

  colorHueData: null,
  colorDataHueLoading: false,
  colorDataHueError: null,
});

