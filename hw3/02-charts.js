// info on filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
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

function removeHousePrefix(houseName) {
  // Check if the name starts with 'House' and remove it.
  if (houseName.toLowerCase().startsWith('house ')) {
    return houseName.slice(6).trim();
  }

  // If the name doesn't start with 'House', return it as-is.
  return houseName;
}

function checkForTypos(house) {
  if (house === 'Targaryn') {
    return 'Targaryen';
  }
  if (house === 'Lannister' || house === 'House Lanister' || house === 'Lanister') {
    return 'Lannister';
  }
  if(house === 'Targaryan'){
    return 'Targaryen';
  }
  if(house === 'Unkown') {
    return 'Unknown';
  }
  if(house === 'Lorath') {
    return 'Lorathi';
  }
  return house;
}
let count = 0;
const groupByHouse = (characters) => {
  const grouped = {};

  characters.forEach(char => {
    let house = char.family || 'Unknown';
    count++;
    // Handle typos or similar house names
    house = removeHousePrefix(house, characters);
    house = checkForTypos(house);

    if (!grouped[house]) {
      grouped[house] = 0;
    }

    grouped[house]++;
  });

  return grouped;
};

const renderChart = async () => {
  const characters = await fetchData();
  const grouped = groupByHouse(characters);

  const houses = Object.keys(grouped);
  const counts = Object.values(grouped);

  const donutChart = document.querySelector('.donut-chart');

  new Chart(donutChart, {
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
};

// Execute the function to render the chart
renderChart().then(() => {});
// const renderChart = () => {
//   const donutChart = document.querySelector('.donut-chart');
//
//   new Chart(donutChart, {
//     type: 'doughnut',
//     data: {
//       labels: ['label', 'label', 'label', 'label'],
//       datasets: [
//         {
//           label: 'My First Dataset',
//           data: [1, 12, 33, 5],
//           backgroundColor: backgroundColors,
//           borderColor: borderColors,
//           borderWidth: 1,
//         },
//       ],
//     },
//   });
// };
//
// renderChart();
