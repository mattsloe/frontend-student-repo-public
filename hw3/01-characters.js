// Credit to https://www.youtube.com/watch?v=m_vL25vzpiE
// for extra help understanding Fetch and how to use promises
// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

fetch(url)
.then(response => response.json())
.then(characters => {
  const sectionElement = document.querySelector('section');

  characters.forEach(character => {
    // Create a div for each character
    const charDiv = document.createElement('div');
    charDiv.className = 'character-card';

    // Create and append the image of the character
    const img = document.createElement('img');
    img.className = 'character-img';
    img.src = character.imageUrl;
    charDiv.appendChild(img);

    // Create and append the name of the character
    const name = document.createElement('h2');
    name.className = 'character-name';
    name.textContent = character.fullName || character.name;
    charDiv.appendChild(name);

    // Create and append the title of the character (if it exists)
    if(character.title) {
      const title = document.createElement('b');
      title.className = 'character-title';
      title.textContent = character.title;
      charDiv.appendChild(title);
    }

    // Append the character div to the section
    sectionElement.appendChild(charDiv);
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
});
