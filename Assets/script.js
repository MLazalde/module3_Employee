// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

//**event listener located at the bottom of the starter code. This will work with addEmployeeBtn to add it to "trackEmployeeData"**

//addEmployeesBtn.addEventListener('click', trackEmployeeData);

// Collect employee data so that it outputs to "trackEmployeeData" trackEmployeeData uses
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  //trackEmployeeData uses Const of employee (line 66)
  let employees = [];
  let anotherEmployee = true;

  while (anotherEmployee) {
    let firstName = prompt("Enter the Employee's First Name:");
    let lastName = prompt("Enter the Employee's Last Name:");
    let salary = prompt("Enter the employee's salary:");

    employees.push({ firstName, lastName, salary: parseFloat(salary) }); //parseFloat to convert to integer?

    anotherEmployee = confirm("Another Employee?");
  }

  return employees;
};

// // Display the average salary
// function displayAverageSalary(employeesArray) {} //??? I don't think this is right. displayAverageSalary hasn't been defined? don't functions usually have the syntax of Function ()??
//   // TODO: Calculate and display the average salary
//   //Define average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = employeesArray.reduce(
    (sum, employee) => sum + employee.salary,
    0
  ); //Learned from MDN Docs. To be perfectly honest, still don't know how this works!

  let averageSalary = totalSalary / employeesArray.length;
  console.log(`The average salary between our employees is ${averageSalary}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randomArray = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomArray];
  console.log(
    `Congratulations to our random drawing winner, ${
      randomEmployee.firstName + " " + randomEmployee.lastName
    }`
  );
};
/*
  ====================
STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
