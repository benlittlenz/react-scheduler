import { fork, all } from 'redux-saga/effects';

import boardSaga from './boards/boards.saga';
import engineerSaga from './engineers/engineer.saga';
import taskSaga from './tasks/task.saga';
import pendingSaga from './pendings/pending.saga';

export default function* () {
  yield all([fork(boardSaga), fork(engineerSaga), fork(taskSaga), fork(pendingSaga)]);
}
