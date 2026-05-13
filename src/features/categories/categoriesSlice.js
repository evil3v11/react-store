import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/categories`);
      return res.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e);
    }
  },
);

const categoriesSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.list = payload
    });
  },
});

export default categoriesSlice.reducer;
