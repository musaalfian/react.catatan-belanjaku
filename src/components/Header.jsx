import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
export default function Header({ isDarkMode, onToggleDarkMode }) {
  return (
    <>
      <div className='bg-blue-500 dark:bg-blue-800 p-4'>
        <div className='flex justify-between w-full md:w-3/4 xl:w-1/2 mx-auto items-center'>
          <h1 className='text-md font-bold text-white'>Catatan Belanjaku.</h1>
          <div className='' onClick={onToggleDarkMode}>
            {isDarkMode ? (
              <FontAwesomeIcon icon={faSun} className='text-white text-xl cursor-pointer p-2' />
            ) : (
              <FontAwesomeIcon icon={faMoon} className='text-white text-xl cursor-pointer p-2' />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
