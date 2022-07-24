import { put, takeLatest } from "redux-saga/effects";
import { FETCH_LANGUAGE } from "./languageTypes";
import { updateLanguage } from "./languageState";

function* readLanguage() {
  yield put(updateLanguage("tr"));
}

function* languageSaga() {
  yield takeLatest(FETCH_LANGUAGE, readLanguage);
}

export default languageSaga;
