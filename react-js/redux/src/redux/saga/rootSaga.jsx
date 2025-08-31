// root saga

import { all } from "redux-saga/effects";
import { getUsersListWatcher } from "./users.saga";

export default function* rootSaga() {
  let watchers = [getUsersListWatcher()];
  yield all(watchers);
}
