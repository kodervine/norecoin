import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, ENDPOINTS } from '@/services/api/endpoints';
import { CoinsResponse } from '@/types/coin';

export const coinsApi = createApi({
  reducerPath: 'coinsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Coins'],
  endpoints: (builder) => ({
    getTickers: builder.query<CoinsResponse, void>({
      query: () => ENDPOINTS.TICKERS,
      providesTags: ['Coins'],
    }),
  }),
});

export const { useGetTickersQuery } = coinsApi;
