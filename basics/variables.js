const accountid = 1234
let accountemail = "abhijeet@gmail.com"
var accpass = "1234"
acccity = "jaipur"
console.table([accountid,accountemail, accpass, acccity ])

let acc
accountemail = "ak@gmail.com"
accpass = "5678"
acccity = "delhi"
console.table([accountid,accountemail, accpass, acccity, acc ])

/*
dont use var always use let because of block scope and function scope problem
const cant be changed but other things can be changed 
acc --> undefined

*/