import { useState } from 'react';
import CustomPagination from '@/components/CustomPagination';
import Loader from '@/components/Loader';
import TableRow from '@/components/TableRow';
import { useGetCoinsQuery } from '@/services/api/coins';

const ITEMS_PER_PAGE = 10;
const DashboardPage = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const {
    data: { data: coinsData, info } = {},
    error,
    isLoading,
  } = useGetCoinsQuery({
    start: (pageIndex - 1) * ITEMS_PER_PAGE,
    pageSize: ITEMS_PER_PAGE,
  });

  const totalCoins = info?.coins_num ?? 10000;
  const totalPages = Math.ceil(totalCoins / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => setPageIndex(page);
  const headers = ['💰 Coin', '📄 Code', '🤑 Price', '📉 Total Supply'];

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <p className="text-center">Something went wrong while fetching data</p>
    );
  }

  return (
    <div className="flex justify-center w-full ">
      <div className="shadow w-full lg:max-w-[50vw]">
        <table className="w-full">
          <thead className="hidden md:inline-block w-full">
            <tr className="bg-white">
              {headers.map((header) => (
                <th key={header} className="p-2 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {coinsData?.map((row, index) => {
              const rowClass = index % 2 === 0 ? 'bg-[#ebebeb]' : 'bg-white';
              return (
                <tr
                  className={`${rowClass} text-xs sm:text-sm text-left`}
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
