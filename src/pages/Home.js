import "../styles/Home.css";
import React, { useState } from 'react';
import CreateList from '../components/CreateList';
import { Link } from 'react-router-dom'; 
import ShopListDetail from '../pages/ShopListDetail'; // Importujte ShopListDetail


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lists, setLists] = useState([]);
  const [createdList, setCreatedList] = useState(null);

  const handleCreateList = (listName) => {
    const newList = { id: Date.now(), name: listName };
    setLists((prevLists) => [...prevLists, newList]);
    setCreatedList(newList);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Domovská stránka</h1>
      <button onClick={() => setIsModalOpen(true)}>Otevřít modální okno</button>

      <CreateList
        isModalOpen={isModalOpen}
        onCreate={handleCreateList}
        onCancel={handleCancel}
      />

      <h2>Seznamy:</h2>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            <Link
              to={`/shoplistdetail/${list.id}`}
              state={{ lists: [list] }}
            >
              {list.name}
            </Link>
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default Home;