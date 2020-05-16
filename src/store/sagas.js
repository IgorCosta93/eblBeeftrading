import { delay } from 'redux-saga';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { login } from "./sagas/login";

export default function* root() {
  yield [
    takeLatest('LOGIN_RESQUEST', login),
  ];
}
