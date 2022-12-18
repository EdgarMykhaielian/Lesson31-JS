alert('Task 5: Divisors of a number.')
let userNumber = +prompt('Type in a number')
let divisor = 1
let allDivisors = []
if (userNumber <= 0) {
    alert('Please enter a positive number')
}
else {
    while (divisor <= userNumber) {
        userNumber % divisor
        if (userNumber % divisor == 0) {
            allDivisors.push(divisor)
        }
        divisor++
    }
    alert(`Divisors of ${userNumber} are: ${allDivisors}`)
}
alert('Next block')