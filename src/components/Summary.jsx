export default function Summary({ items }) {
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percetage = Math.round((checkedItems / totalItems) * 100);

  return (
    <>
      <h2 className='text-md font-medium dark:text-white'>Keterangan</h2>
      {items.length === 0 ? (
        <p className='p-4 border text-center border-slate-400 rounded-md mt-3 dark:bg-gray-800 dark:text-slate-200'>
          Barang belanjaan kosong.
        </p>
      ) : (
        <p className='p-6 border border-slate-400 dark:bg-gray-800 dark:text-slate-200 rounded-md mt-3'>
          Ada {totalItems} barang di daftar belanja. {checkedItems} barang sudah dibeli {percetage}%
        </p>
      )}
    </>
  );
}
