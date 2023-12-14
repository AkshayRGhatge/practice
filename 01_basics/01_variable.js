const accountId = 1445;
let accountEmail = "akshay@gmail.com";
var accountPassword = "Test@123";
accountCity="Brampton";
let accountState;

// accountId=2; // not allowed
accountEmail="a2@gmail.com";
accountPassword="2222";
accountCity="Hamilton";
console.log(accountId);

/*
Preferred not to use var
because of issue in block and functional scope
*/

console.table([accountId , accountEmail, accountPassword, accountCity,accountState]);
