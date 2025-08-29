import { createAsyncThunk } from "@reduxjs/toolkit";

export default {
  getUsersList: createAsyncThunk("CounterSlice/getUserList", async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }),
};
