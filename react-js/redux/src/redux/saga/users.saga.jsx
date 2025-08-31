// worker => api + handler
import {} from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { getUserList, saveUserList } from "../slice/counter.slice";

// api
async function getUsersListService(url) {
  let response = await fetch(url);
  return response.json();
}

function* getUsersListHandler(action) {
  try {
    let url = action.payload;
    let data = yield call(getUsersListService, url);
    yield put(saveUserList(data));
  } catch (error) {
    alert(error);
  }
}

// watcher =>

export function* getUsersListWatcher() {
  yield takeLatest(getUserList.type, getUsersListHandler);
}
