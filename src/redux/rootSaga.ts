import { all } from "redux-saga/effects";
import languageSaga from "./States/Language/languageSaga";

export default function* rootSaga() {
  yield all([languageSaga()]);
}
