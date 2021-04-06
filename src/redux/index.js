import { combineReducers } from 'redux';

import { default as jobs } from './jobs/jobs.duck';

export default combineReducers({
    jobs
});
