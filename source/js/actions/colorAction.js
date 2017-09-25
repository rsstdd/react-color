import { ColorApi } from '../api';
import {
    // COLOR
  FETCH_COLOR,
  FETCH_COLOR_START,
  FETCH_COLOR_ERROR,
  FETCH_COLOR_SUCCESS,

  // SET COLOR 
  SET_ACTIVE_COLOR,
  
    // FILTER COLOR
  SIDEBAR_FILTER_COLOR,
  SET_FILTER_OPTIONS,
  SEARCH_STRING_FILTER,
  UPDATE_SEARCH_STRING,
} from '../constants/actionTypes';

  // Non Async Action
function setCurrentColor(color) {
  return {
    type: SET_ACTIVE_COLOR,
    data: color
  };
}

function setFilterOnColor(colorArr) {
  return {
    type: SIDEBAR_FILTER_COLOR,
    data: colorArr
  };
}

function updateSearchTerm(searchString) {
  return {
    type: UPDATE_SEARCH_STRING,
    data: searchString
  }
}

function filterBySearch(searchTerm, colorData) {
  const searchFilter = colorData.filter((color) => {
    for (const key in color) {
      const valString = color.color.toString().toLowerCase();

      if (valString.indexOf(searchTerm.toLowerCase()) !== -1) {

        return true;
      }
    }

      return false;
    });

  return {
      type: SEARCH_STRING_FILTER,
      data: searchFilter
    }
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

    ColorApi.getColors()
      .then(data => {
        dispatch(fetchColorSuccess(data))
      })
      .catch(error => dispatch(fetchColorError(error)));
  };
}

export {
  setFilterOnColor,
  setFilterOptions,
  getColors,
  filterBySearch,
  setCurrentColor,
  updateSearchTerm,
}
