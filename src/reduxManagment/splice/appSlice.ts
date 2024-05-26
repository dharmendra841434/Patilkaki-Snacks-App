import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

interface AppState {
  test?: string;
  profileDrawer: boolean;
  cartItems: object[];
  // Add other properties as needed
}

// Define the initial state
const initialState: AppState = {
  test: 'testing',
  profileDrawer: false,
  cartItems: [],
  // Initialize other properties as needed
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<string>) => {
      state.test = action.payload;
    },
    setDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.profileDrawer = action.payload;
    },
    setCartItems: (state, action: PayloadAction<object[]>) => {
      state.cartItems = action.payload;
    },
  },
});
export const {setTest, setDrawerOpen, setCartItems} = appSlice.actions;

export default appSlice.reducer;
