// Reecuers/app.js

import initialState from './initialState';
import { Map } from 'immutable';
import {
    // GET COLOR (ASYNC)
  FETCH_COLOR,
  FETCH_COLOR_START,
  FETCH_COLOR_ERROR,
  FETCH_COLOR_SUCCESS,

    // SET COLOR
  SET_ACTIVE_COLOR,
  
  // FILTER COLOR
  SIDEBAR_FILTER_COLOR,
  UPDATE_SEARCH_STRING,
  SEARCH_STRING_FILTER,
} from '../constants/actionTypes';

const actionsMap = {
  // ---------------------
    // SYNC COLOR ACTIONS
  // ---------------------
  [SET_ACTIVE_COLOR]: (state, action) => {
    const currentColor = state.get('currentColor');
    return state.merge(Map({
      currentColor: action.data,
    }));
  },

  [UPDATE_SEARCH_STRING]: (state, action) => {
    const searchTerm = state.get('searchTerm');
    return state.merge(Map({
      searchTerm: action.data,
    }));
  },

  [SIDEBAR_FILTER_COLOR]: (state, action) => {
    const filteredColors = state.get('filteredColors');
    return state.merge(Map({
      filteredColors: action.data,
    }));
  },
  
  [SEARCH_STRING_FILTER]: (state, action) => {
    const filteredColors = state.get('filteredColors');
    return state.merge(Map({
      filteredColors: action.data,
    }));
  },

  // --------------
    // ASYNC COLOR 
  // --------------
  [FETCH_COLOR_START]: (state) => {
    return state.merge(Map({
      colorDataLoading: true,
      colorDataError: null,
      colorData: null,
    }));
  },
  [FETCH_COLOR_ERROR]: (state, action) => {
    return state.merge(Map({
      colorDataLoading: false,
      colorDataError: action.data,
    }));
  },
  [FETCH_COLOR_SUCCESS]: (state, action) => {
    return state.merge(Map({
      colorDataLoading: false,
      colorData: action.data,
    }));
  },
}

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
