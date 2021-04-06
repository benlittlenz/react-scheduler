import { takeLatest, put } from 'redux-saga/effects';

import * as actions from './jobs.duck';
import * as apiCalls from './jobs.api';

function* getAllActiveJobsSaga() {
  yield put(actions.setLoadingState(true));
  try {
    const result = yield apiCalls.getAllActiveEngineer();
    yield put(actions.getAllActiveEngineerSuccess(result.data.records));
  } catch (err) {
    console.log(err);
  }
}

export default function* () {
  yield takeLatest(actions.getAllActiveJobs, getAllActiveJobsSaga);
}
