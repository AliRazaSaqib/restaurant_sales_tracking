import { createSlice } from "@reduxjs/toolkit";
import { MenuItem } from "../../types/CommonTypes";
import { getDataThunk } from "./itemThunk";

export type UserStoreState = {
  items: MenuItem[];
  isLoading: boolean;
};

const initialState: UserStoreState = {
  items: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getDataThunk.fulfilled, (state, action) => {
      state.items = action.payload ?? [];
      state.isLoading = false;
    });
    builder.addCase(getDataThunk.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
