// https://blog.logrocket.com/using-chart-js-react/ for helping with using
// chart.js in React
// https://stackoverflow.com/questions/68100325/canvas-is-already-in-use-chart-with-id-0-must-be-destroyed-before-the-canvas
// for help with useEffect
import React from 'react';
import Chart from 'chart.js/auto';

const HousesChart = () => {
  // The following code can be used to keep track of the state of the chart
  // for useEffect. Implementation will be outside of the scope of this project
  // const chartRef = useRef(null); //reference to chart element
  // const chartInstance = useRef(null); //reference to chart instance

  const backgroundColors = [
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(255, 99, 132, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(199, 199, 199, 0.8)',
    'rgba(83, 102, 255, 0.8)',
    'rgba(40, 159, 64, 0.8)',
    'rgba(210, 199, 199, 0.8)',
    'rgba(78, 52, 199, 0.8)',
  ];

  const borderColors = [
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(159, 159, 159, 1)',
    'rgba(83, 102, 255, 1)',
    'rgba(40, 159, 64, 1)',
    'rgba(210, 199, 199, 1)',
    'rgba(78, 52, 199, 1)',
  ];

// url for the Thrones API
  const url = 'https://thronesapi.com/api/v2/Characters';

// Fetch and process the characters data
  const fetchData = async () => {
    const response = await fetch(url);
    const characters = await response.json();
    return characters;
  };

  function addHousePrefix(houseName,characters) {
    // Check if the houseName already starts with 'House '
    if (houseName.startsWith('House ')) {
      return houseName;
    }

    // Check if there's any character in the dataset that has a house name that starts with 'House '
    // and matches the provided houseName
    const matchingHouse = characters.find(character =>
      character.family === 'House ' + houseName
    );

    // If a matching house is found, return the house name with the 'House ' prefix
    if (matchingHouse) {
      return 'House ' + houseName;
    }

    // If no matching house is found, return the original houseName
    return houseName;
  }

  function checkForTypos(house) {
    if (house === 'Targaryn') {
      return 'House Targaryen';
    }
    if (house === 'Lannister' || house === 'House Lanister' || house === 'Lanister') {
      return 'House Lannister';
    }
    if(house === 'Targaryan'){
      return 'House Targaryen';
    }
    if(house === 'Unkown') {
      return 'Unknown';
    }
    if(house === 'Bolton' || house === 'Mormont'){
      return `House ${house}`;
    }
    return house;
  }
  const groupByHouse = (characters) => {
    const grouped = {};

    characters.forEach(char => {
      let house = char.family || 'Unknown';
      // Handle typos or similar house names
      house = addHousePrefix(house, characters);
      house = checkForTypos(house);

      if (!grouped[house]) {
        grouped[house] = 0;
      }

      grouped[house]++;
    });

    // Only include actual 'Houses'
    const filteredData = {};
    for (let house in grouped) {
      if (house.startsWith('House ')) {
        filteredData[house] = grouped[house];
      }
    }

    return filteredData;
  };

  const renderChart = () => {
    let returnChart;
    fetchData().then(characters => {
      const grouped = groupByHouse(characters);

      const houses = Object.keys(grouped);
      const counts = Object.values(grouped);

      const donutChart = document.querySelector('.donut-chart');

      returnChart = new Chart(donutChart, {
        type: 'doughnut',
        data: {
          labels: houses,
          datasets: [
            {
              label: 'Characters per House',
              data: counts,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        },
      });
    });
    return returnChart;
  };
  renderChart();


  // Return the canvas element for Chart.js to hook into
  return <canvas className="donut-chart" aria-label="donut chart" role="img"></canvas>;
};

export default HousesChart;
