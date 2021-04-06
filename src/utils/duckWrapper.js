import * as R from 'ramda';

export const mergeState = R.mergeRight;

export const setState = (key) => (state, payload) => (key ? { ...state, [key]: payload } : payload);

export const toggleState = (key) => (state) => (key ? { ...state, [key]: !state[key] } : !state);

export const getActionWrapper = R.curry((widgetName, actionName) => `${[widgetName, actionName].join('/')}`);
