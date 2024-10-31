import { ICoin } from '@/types/coin';

interface TableRowProps {
  row: ICoin;
}
const TableRow = ({ row }: TableRowProps) => {
  const tableRow = [
    {
      header: '💰 Coin',
      value: row.name,
    },
    {
      header: '📄 Code',
      value: row.symbol,
    },
    {
      header: '🤑 Price',
      value: `$${row.price_usd}`,
    },
    {
      header: '📉 Total Supply',
      value: `${row.tsupply} ${row.symbol}`,
    },
  ];
  return (
    <>
      {tableRow.map((item) => {
        return (
          <td key={item.header} className="p-2 sm:px-4">
            <p className="md:hidden font-bold">{item.header}</p>
            <p className="break-all">{item.value}</p>
          </td>
        );
      })}
    </>
  );
};

export default TableRow;
