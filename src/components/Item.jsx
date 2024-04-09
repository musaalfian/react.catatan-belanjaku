import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Item({ item, onDeleteItem, onToggleCheckedItem }) {
  return (
    <>
      <li key={item.id} className='border border-slate-400 dark:border-slate-500 sm:py-2 sm:px-4 rounded-md'>
        <div className='flex gap-2 items-center justify-between flex-wrap p-2.5'>
          <div className='flex gap-2 items-center flex-wrap'>
            <input
              type='checkbox'
              checked={item.checked}
              className='w-3.5 h-3.5 sm:me-2'
              name=''
              id=''
              onChange={() => onToggleCheckedItem(item.id)}
            />
            <p className={`${item.checked ? 'line-through' : ''} dark:text-slate-300`}>
              {item.name} ({item.quantity})
            </p>
          </div>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => onDeleteItem(item.id)}
            className='py-2.5 px-3 cursor-pointer rounded-[.25rem] text-red-600 dark:text-white border-slate-400 dark:border-slate-500 border'
          />
        </div>
      </li>
    </>
  );
}
