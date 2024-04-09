import { useState } from 'react';
import '../App.css';
import Header from './Header';
import Form from './Form';
import Items from './Items';
import Footer from './Footer';

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];

function App() {
  const [items, setItems] = useState(groceryItems);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleCheckedItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  function handleClearItems() {
    setItems([]);
  }

  function handleDarkMode() {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <>
      <div className='dark:bg-slate-900'>
        <Header isDarkMode={isDarkMode} onToggleDarkMode={handleDarkMode}></Header>
        <Form onAddItem={handleAddItem}></Form>
        <Items
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleCheckedItem={handleToggleCheckedItem}
          onClearItems={handleClearItems}
        ></Items>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
