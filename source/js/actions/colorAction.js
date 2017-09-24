import * as api from '../api';
import {
    // COLOR
  FETCH_COLOR,
  FETCH_COLOR_START,
  FETCH_COLOR_ERROR,
  FETCH_COLOR_SUCCESS,

  // SET COLOR 
  SET_COLOR,
  
    // FILTER COLOR
  FILTER_COLOR,
  SET_FILTER_OPTIONS
} from '../constants/actionTypes';

  // Non Async Action
function setCurrentColor(color) {
  return {
    type: SET_COLOR,
    data: color
  };
}

function setFilterOnColor(colorArr) {
  return {
    type: FILTER_COLOR,
    data: colorArr
  };
}

// const filteredList = (filter = '', list = []) => {
//   if (filter) {
//     return list.filter((el) => {
//       return Object.keys(el).some((prop) => {
//         return el[prop] &&
//           typeof el[prop] === 'string' &&
//           el[prop].toLowerCase().indexOf(filter.toLowerCase()) >= 0;
//       });
//     });
//   }
// 
//   return list;
// };


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

export {
  setFilterOnColor,
  setFilterOptions,
  getColors,
  setCurrentColor,
}
