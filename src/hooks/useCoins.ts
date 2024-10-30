import { useEffect, useState } from 'react';
import { CoinsResponse } from '@/types/coin';
import { useAppDispatch } from '@/hooks/useReduxHook';
import { setCoinsData } from '@/redux/coinsSlice';

const useCoins = () => {
  const dispatch = useAppDispatch();
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const fetchCoinsData = async () => {
    setIsDataLoading(true);
    try {
      const response = await fetch('https://api.coinlore.net/api/tickers/');
      if (!response.ok) {
        throw new Error('Something went wrong while fetching data');
      }
      const data: CoinsResponse = await response.json();
      const coinsData = data.data;
      dispatch(setCoinsData(coinsData));
    } catch (e) {
      setErrorMessage('Something went wrong');
      console.error(e);
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    fetchCoinsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isDataLoading,
    errorMessage,
  };
};

export default useCoins;
