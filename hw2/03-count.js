// Add your code here
const input = document.getElementById('inText');
const content = document.getElementById('text-content');

function handleKeydown(event) {
  // retrieve search term from input
  const search = event.target.value.trim();
  if (search === '') {
    content.innerHTML = content.textContent;
    return;
  }
  // retrieve the content to be searched
  const { textContent } = content;
  // find and highlight all occurrences of the search term in the text content
  const highlightedTxt = textContent.replace(new RegExp(search, 'gi'),
   (match) => `<mark>${match}</mark>`);
  content.innerHTML = highlightedTxt;
}
input.addEventListener('input', handleKeydown);
