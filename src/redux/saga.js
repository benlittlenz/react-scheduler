import { fork, all } from 'redux-saga/effects';

import boardSaga from './jobs/jobs.saga'

export default function* () {
  yield all([fork(boardSaga)]);
}
