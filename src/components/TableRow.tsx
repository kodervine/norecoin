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
          <td key={item.header}>
            <p className="md:hidden font-bold pb-1">{item.header}</p>
            <p>{item.value}</p>
          </td>
        );
      })}
    </>
  );
};

export default TableRow;
