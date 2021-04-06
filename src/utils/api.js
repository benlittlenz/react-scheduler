import axios from 'axios';

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_REQUEST_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'X-Knack-Application-Id': process.env.REACT_APP_APPLICATION_ID,
    'X-Knack-REST-API-KEY': process.env.REACT_APP_API_KEY,
  },
  maxContentLength: 2000,
  transformResponse: [
    function (data) {
      try {
        data = JSON.parse(data);
      } catch (e) {
        data = { data: {} };
      }
      return data;
    },
  ],
});

export const _get = (req) => apiRequest({ method: 'get', url: req.url, params: req.data });

export const _post = (req) => apiRequest({ method: 'post', url: req.url, data: req.data });

export const _put = (req) => apiRequest({ method: 'put', url: req.url, data: req.data });

export const buildURL = (objectID) => `object_${objectID}/records`;
