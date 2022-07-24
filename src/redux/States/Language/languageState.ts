import { createSlice } from "@reduxjs/toolkit";
import { LanguageState } from "./languageStateModel";

export const languageSlice = createSlice({
  name: "language",
  initialState: { lang: "en" } as LanguageState,
  reducers: {
    fetchLanguage: () => {},
    updateLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { fetchLanguage, updateLanguage } = languageSlice.actions;
export default languageSlice.reducer;
