import { all } from 'redux-saga/effects';
import getWorker from './workerSaga';

export default function* rootSaga() {
  yield all([getWorker()]);
}
