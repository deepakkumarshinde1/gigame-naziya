import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 100,
    users: [],
    error: null,
  },
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
    decrement(state, action) {
      state.count -= 1;
    },
    reset(state, action) {
      state.count = 0;
    },
    getUserList() {},
    saveUserList(state, action) {
      console.log("final output");
      state.users = action.payload;
    },
  },
});

export default CounterSlice;
export const { decrement, increment, reset, getUserList, saveUserList } =
  CounterSlice.actions;
