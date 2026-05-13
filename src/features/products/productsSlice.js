import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/products`);
      return res.data;
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e);
    }
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filtered: [],
    related: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.list = payload;
    });
  },
});

export default productsSlice.reducer;
