import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

// export const getCategories = createAsyncThunk(
//   "categories/getCategories",
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get(`${BASE_URL}/categories`);
//       return res.data;
//     } catch (e) {
//       console.error(e);
//       return thunkAPI.rejectWithValue(e);
//     }
//   },
// );

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: [],
    cart: [],
    favorites: [],
    isLoading: false,
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const foundItem = state.cart.find((item) => item.id === payload.id);
      if (foundItem) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });

      state.cart = newCart;
    },
    addItemToFavorites: (state, { payload }) => {
      let newFavorites = [...state.favorites];
      const foundItem = state.favorites.find((item) => item.id === payload.id);
      if (foundItem) {
        newFavorites = newFavorites.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else newFavorites.push({ ...payload, quantity: 1 });

      state.favorites = newFavorites;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getCategories.pending, (state, { payload }) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(getCategories.rejected, (state) => {
  //     state.isLoading = false;
  //   });
  //   builder.addCase(getCategories.fulfilled, (state, { payload }) => {
  //     state.isLoading = false;
  //     state.list = payload;
  //   });
  // },
});

export const { addItemToCart, addItemToFavorites } = userSlice.actions;

export default userSlice.reducer;
