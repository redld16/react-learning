import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPage from './components/AddPage';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
function App() {
  const [items, setItems] = useState(() => {
    try {
      const storedItems = localStorage.getItem('items');
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error('LocalStorage error:', error);
      return [];
    }
  });
  const [searchInp, setSearchInp] = useState('');

  const handleSearch = (e) => {
    setSearchInp(e.target.value.toLowerCase());
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchInp),
  );

  const handleCheck = (id) => {
    setItems((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      );

      localStorage.setItem('items', JSON.stringify(updated));
      return updated;
    });
  };

  const handleDelete = (id) =>
    setItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      localStorage.setItem('items', JSON.stringify(updated));
      return updated;
    });

  return (
    <>
      <BrowserRouter>
        <Header
          title="Groceries List"
          handleSearch={handleSearch}
          search={searchInp}
        />

        <main className="container">
          <Sidebar />
          <section className="main">
            <Routes>
              <Route
                path="/"
                element={
                  <Content
                    items={filteredItems}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                  />
                }
              />
              <Route
                path="/add"
                element={<AddPage setItems={setItems} items={items} />}
              />
              <Route path="*" element={<h1>404 Not Found</h1>}></Route>
            </Routes>
          </section>
        </main>
        <Footer
          footer={`${items.length} ${items.length > 1 ? 'items' : 'item'} Copyright ${new Date().getFullYear()} © All Rights Reserved`}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
