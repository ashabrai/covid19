import { appSaga } from './appSaga';
import { all } from 'redux-saga/effects';

export function* watchSagas() {
    yield all([appSaga()]);
}