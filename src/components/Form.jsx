import { useState } from 'react';

export default function Form({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      alert('Nama harus diisi!');
      return;
    }

    const newItem = { name, quantity, checked: false, id: Date.now() };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
  }

  const quantityNum = [...Array(10)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <>
      <div className='p-4 mt-8'>
        <div className='mx-auto w-full sm:w-1/2 xl:w-1/3 rounded-lg border border-slate-400 p-4 md:p-8'>
          <h2 className='text-lg font-bold text-center text-slate-900 dark:text-white mb-8'>
            Form Tambah Data Belanja
          </h2>
          <form action='' onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label htmlFor='name' className='mb-3 inline-block dark:text-slate-200'>
                Nama barang
              </label>
              <input
                autoFocus
                placeholder='Masukkan nama barang'
                name='name'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full block border dark:bg-gray-800 dark:text-white dark:placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:border-blue-500 border-slate-400 placeholder:text-slate-500 rounded-md py-2.5 px-4'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='quantity' className='mb-3 inline-block dark:text-slate-200'>
                Jumlah
              </label>
              <select
                name='quantity'
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                id=''
                className='w-full block border dark:bg-gray-800 dark:text-white dark:placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:border-blue-500 border-slate-400 placeholder:text-slate-500 rounded-md py-2.5 px-4'
              >
                {quantityNum}
              </select>
            </div>
            <button className='text-sm py-3 bg-blue-600 text-white w-full block rounded-md font-semibold mt-8'>
              Tambah
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
