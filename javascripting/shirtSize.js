/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
let shirtWidth = 22;
let shirtLength = 30;
let shirtSleeve = 8.63;
let widthSize;
let lengthSize;
let sleeveSize;

// Calculates the shirt size based off of shirt width //
if (shirtWidth >= 18 && shirtWidth < 20) {
    widthSize = 'S';
} else if (shirtWidth >= 20 && shirtWidth < 22) {
    widthSize = 'M';
} else if (shirtWidth >= 22 && shirtWidth < 24) {
    widthSize = 'L';
} else if (shirtWidth >= 24 && shirtWidth < 26) {
    widthSize = 'XL';
} else if (shirtWidth >= 26 && shirtWidth < 28) {
    widthSize = '2XL';
} else if (shirtWidth >= 28) {
    widthSize = '3XL';
} else {
    console.log ('NA');
}
// Calculates the shirt size based off of shirt length //
if (shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
    sleeveSize = 'S';
} else if (shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
    sleeveSize = 'M';
} else if (shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
    sleeveSize = 'L';
} else if (shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
    sleeveSize = 'XL';
} else if (shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
    sleeveSize = '2XL';
} else if (shirtSleeve >= 10.13) {
    sleeveSize = '3XL';
} else {
    console.log ('NA');
}

// Calculates the shirt size based off of the sleeve length
if (shirtLength >= 28 && shirtLength < 29) {
    lengthSize = 'S';
} else if (shirtLength >= 29 && shirtLength < 30) {
    lengthSize = 'M';
} else if (shirtLength >= 30 && shirtLength < 31) {
    lengthSize = 'L';
} else if (shirtLength >= 31 && shirtLength < 33) {
    lengthSize = 'XL';
} else if (shirtLength >= 33 && shirtLength < 34) {
    lengthSize = '2XL';
} else if (shirtLength >= 34) {
    lengthSize = '3XL';
} else {
    console.log ('NA');
}
if (widthSize === lengthSize && lengthSize === sleeveSize) {
    console.log(widthSize)
} else {
    console.log('NA')
}


/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE