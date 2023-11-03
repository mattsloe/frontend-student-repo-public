import React from 'react';
import './styles/Home.css';
import NavBar from './NavBar';
import HousesChart from './HousesChart.js'
const Houses = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <h1>Exercise 02 - Charts</h1>
        <HousesChart />
      </div>
    </>
  );
};

export default Houses;
