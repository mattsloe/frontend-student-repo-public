// selecting the form
const form = document.querySelector('form');
// event listener for submit button
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from actually submitting
  // (prevent refresh)

  const fullName = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const registrationStatus = document.getElementById('status').value;

  // Get all the checked courses
  const courseCheckboxes = document.querySelectorAll('input[name="courses"]:checked');
  const selectedCourses = [];
  courseCheckboxes.forEach((checkbox) => {
    selectedCourses.push(checkbox.value);
  });

  const anythingElse = document.getElementById('anythingElse').value;

  // print to console
  console.log({
    fullName,
    email,
    registrationStatus,
    selectedCourses,
    anythingElse,
  });
});
