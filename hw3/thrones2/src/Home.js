import React from 'react';
import './styles/Home.css';
import NavBar from './NavBar';
const Home = () => {
  return (
    <>
    <NavBar />
    <div className="container mt-5">
      <h1>Welcome to the Thrones App!</h1>
      <p>
        Explore the Game of Thrones!
      </p>
    </div>
      </>
  );
};

export default Home;
