import { useState } from 'react';
import Item from './Item';
import Summary from './Summary';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Items({ items, onDeleteItem, onToggleCheckedItem, onClearItems }) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;

  if (sortBy === 'input') {
    sortedItems = items;
  }

  if (sortBy === 'abjad') {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === 'checklist') {
    sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
  }

  return (
    <>
      <div className='p-4 mt-8 mb-20'>
        <div className='mx-auto w-full sm:w-2/3 lg:w-3/6 rounded-lg border border-slate-400 p-4 md:p-8'>
          <div className='flex justify-between flex-wrap gap-3 mb-8'>
            <h2 className='text-lg font-bold text-center dark:text-white'>Daftar Belanja Saya</h2>
            <div className='flex gap-3 items-center'>
              <select
                name=''
                id=''
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='rounded-[.25rem] px-3 max-w-24 border dark:bg-gray-100 border-slate-400 py-2 text-sm'
              >
                <option value='input'>Default</option>
                <option value='abjad'>Urutkan berdasarkan huruf</option>
                <option value='checklist'>Urutkan berdasarkan checklist</option>
              </select>
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={onClearItems}
                className='bg-red-500 py-2.5 px-3 cursor-pointer rounded-[.25rem] text-white'
              />
            </div>
          </div>
          {sortedItems.length === 0 ? (
            <p className='border rounded-md border-slate-400 dark:bg-gray-800 dark:text-slate-200 text-center p-4 mb-4'>
              Daftar belanja tidak tersedia.
            </p>
          ) : (
            <ul className='flex flex-col gap-3 mb-8'>
              {sortedItems.map((item) => (
                <Item
                  item={item}
                  key={item.id}
                  onDeleteItem={onDeleteItem}
                  onToggleCheckedItem={onToggleCheckedItem}
                ></Item>
              ))}
            </ul>
          )}
          <Summary items={items}></Summary>
        </div>
      </div>
    </>
  );
}
