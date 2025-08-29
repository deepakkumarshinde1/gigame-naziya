import { createSlice } from "@reduxjs/toolkit";
import apis from "../services/apis";

function apiBuilder(builder, action, cb, ecb) {
  builder.addCase(action.fulfilled, cb).addCase(action.rejected, ecb);
}
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
  },
  extraReducers: (builder) => {
    apiBuilder(
      builder,
      apis.getUsersList,
      (state, action) => {
        state.users = action.payload;
      },
      (state, action) => {
        state.error = "Something went wrong, try again.";
      }
    );
  },
});

export default CounterSlice;
export const { decrement, increment, reset } = CounterSlice.actions;
