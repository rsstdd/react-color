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
  SET_COLOR,
  
  // FILTER COLOR
  FILTER_COLOR,
} from '../constants/actionTypes';

const actionsMap = {
  // --------------
    // SYNC COLOR
  // --------------
  [SET_COLOR]: (state, action) => {
    const currentColor = state.get('currentColor');
    return state.merge(Map({
      currentColor: action.data,
    }));
  },

  [FILTER_COLOR]: (state, action) => {
    const filterColor = state.get('filterColor');
    console.log('REDUCER ==> ', filterColor);
    return state.merge(Map({
      filterColor: action.data,
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
