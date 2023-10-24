// Add your code here
// Function to generate a random RGBA color with lighter alpha

function generateColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const alpha = Math.random() * 0.6 + 0.2; // Generate alpha value between 0.2 and 0.8
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

let intervalId = null; // Store the interval ID

function toggleBackgroundColorChange() {
  const button = document.getElementById('toggleSwitching');
  const intervalInput = document.getElementById('interval');

  if (intervalId === null) {
    // Start background color change
    const intervalSeconds = parseInt(intervalInput.value, 10) * 1000;
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = generateColor();
    }, intervalSeconds);

    button.textContent = 'Stop';
    button.className = 'btn btn-danger';// also change the color to red
  } else {
    // Stop background color change
    clearInterval(intervalId);
    intervalId = null;

    button.textContent = 'Start';
    button.className = 'btn btn-primary';
  }
}

// Add a click event listener to the button
window.addEventListener('load', () => { toggleBackgroundColorChange(); });
// start behavior on window load
document.getElementById('toggleSwitching').addEventListener('click', toggleBackgroundColorChange);
