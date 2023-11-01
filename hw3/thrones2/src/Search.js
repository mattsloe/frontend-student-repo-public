// create input, search through API, and display results
import React, { useState, useEffect } from 'react';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [allCharacters, setAllCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [error, setError] = useState(null);

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
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Search for a character..."
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      <ul>
        {filteredCharacters.map(character => (
          <li key={character.id}>
            <p>{character.name}</p>
            <img src={character.imageUrl} alt={character.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
