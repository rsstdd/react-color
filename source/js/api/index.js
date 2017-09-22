// API

import promisePolyfill from 'es6-promise';
import 'isomorphic-fetch';

promisePolyfill.polyfill();

const rootUrl = 'https://react-color-api.herokuapp.com/colors'

const getColors = () => {
  return fetch(`${rootUrl}`)
    .then(res => res.json());
}

const getColorById = (id) => {
  return fetch(`${rootUrl}/${id}`)
    .then(res => res.json());
}

const getColorsByHue = (hue) => {
  let fetchData = {
    method: 'GET',
    body: {color: `${hue}`},
    headers: new Headers()
  };
  return fetch(`${rootUrl}/hue`, fetchData)
    .then(res => res.json());
}

export {
  getColors,
  getColorById,
  getColorsByHue,
};
