// Get references to the form and result container elements
const form = document.getElementById('payCalculatorForm');
const resultContainer = document.getElementById('resultContainer');

// Define the maximum number of hours per week
const maxHoursPerWeek = 40;

// Event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve the employee name and hours worked from the input fields
  const employeeName = document.getElementById('employeeName').value;
  const hoursWorked = parseInt(document.getElementById('hoursWorked').value);

  // Validate the hours worked input
  if (!isValidHours(hoursWorked)) {
    displayErrorMessage('Invalid input. Hours worked must be a number between 0 and 40.');
    return;
  }

  // Calculate the paycheck and remaining hours
  const paycheck = calculatePaycheck(hoursWorked);
  const remainingHours = maxHoursPerWeek - hoursWorked;

  // Display the result
  displayResult(employeeName, paycheck, remainingHours);
});

// Function to validate the hours worked input
function isValidHours(hours) {
  return Number.isInteger(hours) && hours >= 0 && hours <= maxHoursPerWeek;
}

// Function to calculate the paycheck based on hours worked
function calculatePaycheck(hoursWorked) {
  const hourlyRate = 15;
  return hoursWorked * hourlyRate;
}

// Function to display the result in the result container
function displayResult(employeeName, paycheck, remainingHours) {
  const resultHTML = `
    <h2>Paycheck Calculation for ${employeeName}</h2>
    <p>Paycheck: $${paycheck}</p>
    <p>Remaining hours: ${remainingHours}</p>
  `;

  resultContainer.innerHTML = resultHTML;
}

// Function to display an error message in the result container
function displayErrorMessage(message) {
  resultContainer.innerHTML = `<p class="error">${message}</p>`;
}
