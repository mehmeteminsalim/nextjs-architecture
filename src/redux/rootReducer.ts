import { combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./States/Language/languageState";

export const rootReducer = combineReducers({
  language: languageReducer,
});
