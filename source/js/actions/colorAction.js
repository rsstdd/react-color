import * as api from '../api';
import {
    // COLOR
  FETCH_COLOR,
  FETCH_COLOR_START,
  FETCH_COLOR_ERROR,
  FETCH_COLOR_SUCCESS,
    // ID
  FETCH_COLOR_ID,
  FETCH_COLOR_ID_START,
  FETCH_COLOR_ID_ERROR,
  FETCH_COLOR_ID_SUCCESS,
    // HUE
  FETCH_COLOR_HUE,
  FETCH_COLOR_HUE_START,
  FETCH_COLOR_HUE_ERROR,
  FETCH_COLOR_HUE_SUCCESS,
  
  // SET COLOR 
  SET_COLOR,
  
    // FILTER COLOR
  FILTER_COLOR,
} from '../constants/actionTypes';

  // Non Async Action
function setCurrentColor(color) {
  return {
    type: SET_COLOR,
    data: color
  };
}

function setFilterOnColor(color) {
  return {
    type: FILTER_COLOR,
    data: color
  };
}


  // Async COLORS
function fetchColorStart() {
  return {
    type: FETCH_COLOR_START,
  };
}

function fetchColorSuccess(data) {
  return {
    type: FETCH_COLOR_SUCCESS,
    data,
  };
}

function fetchColorError(error) {
  return {
    type: FETCH_COLOR_ERROR,
    error,
  };
}

const getColors = () => {
  return function (dispatch) {
    dispatch(fetchColorStart());

    api.getColors()
      .then(data => {
        dispatch(fetchColorSuccess(data))
      })
      .catch(error => dispatch(fetchColorError(error)));
  };
}


  // Async ID
function fetchColorIdStart() {
  return {
    type: FETCH_COLOR_ID_START,
  };
}

function fetchColorIdSuccess(data) {
  return {
    type: FETCH_COLOR_ID_SUCCESS,
    data,
  };
}

function fetchColorIdError(error) {
  return {
    type: FETCH_COLOR_ID_ERROR,
    error,
  };
}

const getColorById = (id) => {
  return function (dispatch) {
    dispatch(fetchColorIdStart());

    api.getColorById()
      .then(data => dispatch(fetchColorIdSuccess(data)))
      .catch(error => dispatch(fetchColorIdError(error)));
  };
}


  // Async COLORS/HUE

function fetchColoHueStart(hue) {
  return {
    type: FETCH_COLOR_HUE_START,
  };
}

function fetchColoHueSuccess(data) {
  return {
    type: FETCH_COLOR_HUE_SUCCESS,
    data,
  };
}

function fetchColoHueError(error) {
  return {
    type: FETCH_COLOR_HUE_ERROR,
    error,
  };
}

const getColorsByHue = () => {
  return function (dispatch) {
    dispatch(fetchColoHueStart());

    api.getColorsByHue()
      .then(data => dispatch(fetchColoHueSuccess(data)))
      .catch(error => dispatch(fetchColoHueError(error)));
  };
}

export {
  setFilterOnColor,
  getColors,
  getColorById,
  getColorsByHue,
  setCurrentColor,
}
