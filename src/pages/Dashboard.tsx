import { useState } from 'react';
import CustomPagination from '@/components/CustomPagination';
import useCoinsData from '@/hooks/useCoins';
import { useAppSelector } from '@/hooks/useReduxHook';
import Loader from '@/components/Loader';
import TableRow from '@/components/TableRow';

const ITEMS_PER_PAGE = 10;
const DashboardPage = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { isDataLoading, errorMessage } = useCoinsData();
  const { coinsData } = useAppSelector((state) => state.coins);
  const totalPages = Math.ceil(coinsData.length / ITEMS_PER_PAGE);

  const paginatedData = coinsData?.slice(
    (pageIndex - 1) * ITEMS_PER_PAGE,
    pageIndex * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => setPageIndex(page);
  const headers = ['💰 Coin', '📄 Code', '🤑 Price', '📉 Total Supply'];

  if (isDataLoading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <p className="text-center">{errorMessage}</p>;
  }

  return (
    <div className="flex justify-center w-full ">
      <div className="shadow w-full lg:max-w-[50vw]">
        <table className="w-full">
          <thead className="hidden md:inline-block w-full">
            <tr className="bg-white">
              {headers.map((header) => (
                <th key={header} className="py-2 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => {
              const rowClass = index % 2 === 0 ? 'bg-[#ebebeb]' : 'bg-white';
              return (
                <tr
                  className={`${rowClass} text-xs sm:text-sm p-2 md:p-1 text-left mb-1`}
                  key={row.id}
                >
                  <TableRow row={row} />
                </tr>
              );
            })}
          </tbody>
        </table>

        <br />
        <CustomPagination
          pageCount={totalPages}
          pageIndex={pageIndex}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
