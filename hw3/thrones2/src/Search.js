// create input, search through API, and display results
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import './styles/Home.css';
import './styles/Search.css';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [allCharacters, setAllCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [error, setError] = useState(null);

  // fetch characters from API
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const data = await response.json();
        setAllCharacters(data);
      } catch (err) {
        setError('Something went wrong while fetching characters. Please try again.');
      }
    };
    fetchCharacters();
  }, []);

  // filter characters based on input
  const handleSearch = () => {
    const matchedCharacters = allCharacters.filter(character =>
      character.fullName.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (matchedCharacters.length === 0) {
      setError('Character not found');
    } else {
      setError(null);
    }

    setFilteredCharacters(matchedCharacters);
  };

  return (
    <>
      <NavBar />
      <div className="search-input-container">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Search for a character..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="card-container">
        {filteredCharacters.map(character => (
          <div key={character.id} className="card">
            <img src={character.imageUrl} alt={character.fullName} />
            <div className="card-info">
              <p>{character.fullName}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;
