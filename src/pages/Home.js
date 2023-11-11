import "../styles/Home.css";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateList from '../components/CreateList';


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdList, setCreatedList] = useState(null);

  const handleCreateList = (listName) => {
    console.log(`Vytvořit seznam s názvem: ${listName}`);
    setCreatedList(listName);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>


      <h1 className="home-title">Shopping Lists</h1>
      <button onClick={() => setIsModalOpen(true)}>Create Shopping List</button>

      <CreateList
        isModalOpen={isModalOpen}
        onCreate={handleCreateList}
        onCancel={handleCancel}
      />

      {createdList && <p>Vytvořený seznam: {createdList}</p>}
      <div className="box">
        <p>Shopping List</p>
        <Link to="/shoplistdetail">
          <button>Join</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;