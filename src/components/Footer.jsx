import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <>
      <p className='text-center bg-blue-600 py-4 text-white'>
        Created by{' '}
        <a href='' target='_blank' className='font-bold'>
          Musa
        </a>
        . Made with <FontAwesomeIcon icon={faHeart} />.
      </p>
    </>
  );
}
