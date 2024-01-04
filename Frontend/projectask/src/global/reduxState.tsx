import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  projectID: "",
  user: "" || null,
};
const reduxState = createSlice({
  name: "reduxState",
  initialState,
  reducers: {
    changeToggle: (state, { payload }) => {
      state.toggle = payload;
    },

    loginUser: (state, { payload }) => {
      state.user = payload;
    },

    addProjectID: (state, { payload }) => {
      state.projectID = payload;
    },

    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { changeToggle, loginUser, logOut, addProjectID } =
  reduxState.actions;

export default reduxState.reducer;
