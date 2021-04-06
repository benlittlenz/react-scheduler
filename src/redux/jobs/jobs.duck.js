import { createAction } from 'redux-actions';

import { setState, getActionWrapper } from '../../utils';

const initState = {
  data: [],
  isLoading: false,
};

const wrapWithNameSpace = getActionWrapper('JOB');

export const GET_ALL_ACTIVE_JOBS = wrapWithNameSpace('GET_ALL_ACTIVE_JOBS');
export const GET_ALL_ACTIVE_JOBS_SUCCESS = wrapWithNameSpace('GET_ALL_ACTIVE_JOBS_SUCCESS');
export const SET_LOADING_STATE = 'SET_LOADING_STATE';

export const getAllActiveJobs = createAction(GET_ALL_ACTIVE_JOBS);
export const getAllActiveJobsSuccess = createAction(GET_ALL_ACTIVE_JOBS_SUCCESS);
export const setLoadingState = createAction(SET_LOADING_STATE);

export default (state = initState, action) => {
  const { type, payload } = action;

  const reducer = {
    [GET_ALL_ACTIVE_JOBS]: (state, payload) => ({
      ...state,
      data: payload,
      isLoading: false,
    }),
    [SET_LOADING_STATE]: setState('isLoading'),
  }[type];

  return reducer ? reducer(state, payload) : state;
};
