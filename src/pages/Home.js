import "../styles/Home.css";

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <h1 className="home-title">Shopping Lists</h1>
      <div className="box">
        <p>Shopping List</p>
        <Link to="/shoplistdetail">
          <button>Join</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;