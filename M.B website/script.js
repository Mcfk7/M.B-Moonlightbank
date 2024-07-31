// Select the form and submit button
const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

// Function to store the fixed value and redirect
function storeButtonValue(event) {
  event.preventDefault(); // Prevent the default form submission

  const buttonValue = 'moonlight';
  localStorage.setItem('selectedPlanet', buttonValue);

  // Redirect to the specified page
  window.location.href = "index (1).html";
}

// Add click event listener to the submit button
if (submitButton) {
  submitButton.addEventListener('click', storeButtonValue);
} else {
  console.error('Submit button not found');
}

// Optional: Handle form submission if necessary
if (form) {
  form.addEventListener('submit', storeButtonValue);
} else {
  console.error('Form not found');
}