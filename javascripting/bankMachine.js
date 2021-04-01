/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*

// Follows a certain amount of set options on a banking machine to determine what output is given //
// Based off of the users input and bank account conditions. //
// Change around values to test for potential errors. //



var balance = 123.1254;
var checkBalance = true;
var isActive = true;

if (checkBalance === false) {
    console.log("Thank you. Have a nice day!")
} else { if (checkBalance === true && isActive === true && balance > 0) {
        console.log(`Your balance is $${balance.toFixed(2)}.`)
    } else if (checkBalance === true && balance > 0 && isActive === false) {
        console.log('Your account is no longer active.')
    } else if (checkBalance === true && isActive == true && balance == 0) {
        console.log('Your account is empty.')
    } else {
        console.log('Your balance is negative. Please contact the bank.')
    }
}

