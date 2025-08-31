import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slice/counter.slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);
export default store;
