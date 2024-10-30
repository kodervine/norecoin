import { createSlice } from '@reduxjs/toolkit';
import { ICoin } from '@/types/coin';

interface CoinsState {
  coinsData: ICoin[];
}

const initialState: CoinsState = {
  coinsData: [],
};

const coinsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCoinsData: (state, action) => {
      state.coinsData = action.payload;
    },
  },
});

export const { setCoinsData } = coinsSlice.actions;

export default coinsSlice.reducer;
