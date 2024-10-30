import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import coinsReducer from '@/redux/coinsSlice';
import { coinsApi } from '@/services/api/coins';

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
    [coinsApi.reducerPath]: coinsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
