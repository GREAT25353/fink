const accountId = 144553
let accountEmail = "jhonDopkins123@gmail.com"
var accountPassword = "45667"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "rauna34@gmail.com"
accountPassword = "213343243"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])

