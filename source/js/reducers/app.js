// Reecuers/app.js

import initialState from './initialState';
import { Map } from 'immutable';
import {
    // GET COLOR (ASYNC)
  FETCH_COLOR,
  FETCH_COLOR_START,
  FETCH_COLOR_ERROR,
  FETCH_COLOR_SUCCESS,
  FETCH_COLOR_ID,
  FETCH_COLOR_ID_START,
  FETCH_COLOR_ID_ERROR,
  FETCH_COLOR_ID_SUCCESS,
  FETCH_COLOR_HUE,
  FETCH_COLOR_HUE_START,
  FETCH_COLOR_HUE_ERROR,
  FETCH_COLOR_HUE_SUCCESS,
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
    const colorHues = state.get('colorHues');
    return state.merge(Map({
      setFilterOnColor: action.data,
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


  // ------------
    //   ID 
  // ------------
  [FETCH_COLOR_ID_START]: (state) => {
    return state.merge(Map({
      colorDataIdLoading: true,
      colorDataIdError: null,
      colorIdData: null,
    }));
  },
  [FETCH_COLOR_ID_ERROR]: (state, action) => {
    return state.merge(Map({
      colorDataIdLoading: false,
      colorDataIdError: action.data,
    }));
  },
  [FETCH_COLOR_ID_SUCCESS]: (state, action) => {
    return state.merge(Map({
      colorDataIdLoading: false,
      colorIdData: action.data,
    }));
  },


  // ------------
    //   HUE 
  // ------------
  [FETCH_COLOR_HUE_START]: (state) => {
    return state.merge(Map({
      colorDataHueLoading: true,
      colorDataHueError: null,
      colorHueData: null,
    }));
  },
  [FETCH_COLOR_HUE_ERROR]: (state, action) => {
    return state.merge(Map({
      colorDataHueLoading: false,
      colorDataHueError: action.data,
    }));
  },
  [FETCH_COLOR_HUE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      colorDataHueLoading: false,
      colorHueData: action.data,
    }));
  },
};


export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
