import { configureStore } from "@reduxjs/toolkit";
import CreateSagaMiddleware from "redux-saga";
import Logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

const SagaMiddleware = CreateSagaMiddleware();

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(Logger, SagaMiddleware),
  });
}

const store = makeStore();
SagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
