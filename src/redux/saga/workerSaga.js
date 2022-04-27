import { call, put, delay, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { allCards } from "../actions/cardActions";

const getCardsFetch = async () => {
  const response = await axios('https://jsonplaceholder.typicode.com/photos');
  return response.data;
};

function* getWorker(action) {
  try {
    yield delay(500);
    const posts = yield call(getCardsFetch, action.payload);
    yield put(allCards(posts));
  } catch (e) {
    console.log(e);
  }
}

function* searchWatcher() {
  yield takeLatest('GET_CARDS', getWorker);
}

export default searchWatcher;
