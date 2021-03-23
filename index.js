 // 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence.
// Your program should take a number as input. 
// That number should be the number of sheep you have.
// The function should display the number along with the message 
// "Another sheep jumps over the fence" until no more sheep are left.

// Input = 3
// Output = Another sheep jumps over the fence 
// Another sheep jumps over the fence 
// Another sheep jumps over the fence 
// All sheep jumped over the fence


const countSheep = function(num) {
// Base Case
    if (num === 0) {
        return "All sheep jumped over the fence"
    }
//General Case
    return "Another sheep jumps over the fence " + countSheep(num - 1)
}

// console.log(countSheep(3))


// 2. Power Calculator
// Write a function called powerCalculator() that takes 2 parameters,
// an integer as a base, and another integer as an exponent.
// The functions returns the value of the base raised to the power of 
// the exponent. Use only exponents greater than or equal to 0.

// input = 10, 2
// output = 100

// input = 10, -2
// output = "exponent should be >= 0"

// recursive input:
// 10 x 10 to the 1st

// recursive output: 
//  100

const powerCalculator = function(base, exponent) {
// base function
    if (exponent === 1) {
        return base    
    }

// general function
    if ( exponent < 0 ) {
        return "exponent should be >= 0"
    }
    return base * (powerCalculator(base, exponent - 1))
}

// console.log(powerCalculator(10, 2))
// console.log(powerCalculator(10, -2))


// 3. Reverse String
// Write a function that reverses a string.
// Take a string as the input
// Reverse the string and return the new string

// input = 'abcd'
// output = 'dcba'

// recursive input = d + reverseString('abc')
// recursive input = dc + reverseString('ab')
// recursive input = dcb + reverseString('a')
// recursive input = dcba + reverseString('')

// recursive output = d + abc
//                 = dc + ab
//                 = dcb + a
//                 = dcba
const reverseString = function(str) {
    if (str.length === 0) {
        return str
    }

    const lastIndex = str.length
    const remainingStr = str.slice(0, lastIndex -1)
    const lastLetter = str[lastIndex - 1]

    return lastLetter + reverseString(remainingStr)
     
}

// console.log(reverseString('abcd'))

// 4. nth Triangular Number
// Calculate the nth triangle number
// Triangle number sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

// input = 4
// output = 10

// recursive input = 4 + triangleNum(3)
// recursive input = 3 + triangleNum(2)
// recursive input = 2 + triangleNum(1)
// recursive input = 1 

// recursive ouput = 10
// recursive output = 6 + triangleNum(3)
// recursive output = 3 + triangleNum(2)
// recursive output = 1 + triangleNum(1)


const triangleNum = function(n) {
    if (n === 1) {
        return n
    }

    return n + triangleNum(n -1)
}

console.log(triangleNum(4))
