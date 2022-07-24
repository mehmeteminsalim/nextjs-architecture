import { createSlice } from "@reduxjs/toolkit";
import { LanguageState } from "./languageStateModel";

const initialState = { lang: "en" } as LanguageState;

export const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    fetchLanguage: () => {},
    updateLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { fetchLanguage, updateLanguage } = languageSlice.actions;
export default languageSlice.reducer;
