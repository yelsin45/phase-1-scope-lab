// Write your solution in this file!
var customerName = 'bob';

// Task 2: Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Task 3: Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob'; // 'bestCustomer' is declared in global scope
}

// Task 4: Write a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Task 5: Declare a constant in global scope called leastFavoriteCustomer and write a function called changeLeastFavoriteCustomer() that attempts to change the constant.
const leastFavoriteCustomer = 'some customer';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'another customer'; 
}