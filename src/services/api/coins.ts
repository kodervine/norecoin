import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, ENDPOINTS } from '@/services/api/endpoints';
import { CoinsResponse } from '@/types/coin';

export const coinsApi = createApi({
  reducerPath: 'coinsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Coins'],
  endpoints: (builder) => ({
    getCoins: builder.query<CoinsResponse, { start: number; pageSize: number }>(
      {
        query: ({ start = 1, pageSize = 10 }) =>
          `${ENDPOINTS.TICKERS}/?start=${start}&limit=${pageSize}`,
        providesTags: ['Coins'],
      }
    ),
  }),
});

export const { useGetCoinsQuery } = coinsApi;
