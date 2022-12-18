alert('Task 4: GCD')
let numOne = prompt('Enter your first number')
let numTwo = prompt('Enter your second number')
//gcd = greatest common divisor
function gcd(numOne, numTwo) {
    if (numTwo === 0) {
        return numOne;
    }
    return gcd(numTwo, numOne % numTwo)
}
alert(`Greatest common divisor is ${gcd(numOne, numTwo)}`)
alert('Next task')