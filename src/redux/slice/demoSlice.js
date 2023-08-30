import { createSlice } from "@reduxjs/toolkit";

export const demoSlice = createSlice({
  name: "demo",
  initialState: {
    show: false,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.show = !action.payload;
    },
  },
});

export const { toggleModal } = demoSlice.actions;

export default demoSlice.reducer;
