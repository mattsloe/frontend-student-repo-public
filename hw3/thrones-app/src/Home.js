// Welcome message
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to the Thrones App!</h1>
      <p>
        Explore the world of Game of Thrones characters and houses.
      </p>
      <div className="mt-4">
        <Link to="/search" className="btn btn-primary mr-2">
          Search Characters
        </Link>
        <Link to="/houses" className="btn btn-secondary">
          View Houses
        </Link>
      </div>
    </div>
  );
};

export default Home;
