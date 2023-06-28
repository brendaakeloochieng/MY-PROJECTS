const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let employeeName;
let hoursWorked;
const hourlyRate = 15;
const maxHoursPerWeek = 40;

rl.question('Enter your name: ', (name) => {
  employeeName = name;

  askHoursWorked();
});

function askHoursWorked() {
  rl.question('Enter the number of hours worked this week: ', (hours) => {
    if (!/^\d+$/.test(hours)) {
      console.log('Error: Invalid input. Please enter a valid number of hours.');
      setTimeout(askHoursWorked, 2000); // Reprompt after 2 seconds
      return;
    }

    hoursWorked = parseInt(hours);
    if (hoursWorked < 0 || hoursWorked > maxHoursPerWeek) {
      console.log('Error: Invalid input. Hours worked must be between 0 and ' + maxHoursPerWeek + '.');
      setTimeout(askHoursWorked, 2000); // Reprompt after 2 seconds
      return;
    }

    calculatePaycheck();
  });
}

function calculatePaycheck() {
  let paycheck = hoursWorked * hourlyRate;
  let remainingHours = maxHoursPerWeek - hoursWorked;

  console.log('--------------------------------------');
  console.log('Paycheck Calculation for ' + employeeName);
  console.log('--------------------------------------');
  console.log('Hours Worked: ' + hoursWorked);
  console.log('Hourly Rate: $' + hourlyRate);
  console.log('Paycheck: $' + paycheck);
  console.log('Untilized hours: ' + remainingHours);
  console.log('--------------------------------------');

  rl.close();
}
