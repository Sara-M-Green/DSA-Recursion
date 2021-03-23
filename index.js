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

// console.log(triangleNum(4))

// 5. String Splitter
// write a recursive funtion that splits a string based on a seperator
// Dont use js array's split function

// input 02/20/2020
// output ["02", "20", "2020"]

// recursive input = 20/2020, "/", ["02"]
// recursive input = 2020, "/", ["02", "20"]
// recursive output = ["02", "20", "2020"]



const stringSplitter = function(string, seperator, arr) {
    
    if (!(string.includes(seperator))) {
        arr.push(string)
        return arr
    }

    const split = string.indexOf(seperator)

    const first = string.slice(0, split)
    const next = string.slice(split + 1)

    arr.push(first)

    stringSplitter(next, seperator, arr)
    return arr
}

// console.log(stringSplitter("02/20/2020", "/", []))

// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number.
// The Fibonacci sequence is a series of numbers 
// in which each number is the sum of the 2 preceding numbers. 

// input = 7
// output = 13

const fibonacci = function(num) {
    if (num === 0 || num === 1) {
        return num
    }
    return fibonacci(num - 2) + fibonacci(num - 1)
}

// console.log(fibonacci(7))

// 7. Factorial
// Write a recursive function that finds the factorial of a given number
input = 5
output = 120

recursive input = 5 * factorial(4)
recursive input = 4 * factorial(3)
recursive input = 2 * factorial(1)
recursive output = 120

const factorial = function(num) {
    if (num === 1) {
        return num
    }

    return num * factorial(num - 1)
}

console.log(factorial(5))