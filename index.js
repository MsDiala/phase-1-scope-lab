// Write your solution in this file!
// Declare customerName to be 'bob' in global scope
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = "Alice";

function changeLeastFavoriteCustomer() {
  // This will throw an error because you cannot reassign a constant.
  leastFavoriteCustomer = "Bob";
}

// module.exports = {
//   customerName,
//   upperCaseCustomerName,
//   setBestCustomer,
//   overwriteBestCustomer,
//   leastFavoriteCustomer,
//   changeLeastFavoriteCustomer,
// };
