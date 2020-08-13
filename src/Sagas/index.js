import { all, fork } from 'redux-saga/effects';

import movieSaga from './movieSaga';

export default function* rootSaga() {
    yield all([fork(movieSaga)])
}