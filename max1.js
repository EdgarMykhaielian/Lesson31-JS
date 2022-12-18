alert('Task 1: Number guessing game!')
let min = 0
let max = 100
let midNum = 50

alert('Think about a number from 0 to 100')

while (min + 1 !== max) {
    midNum = Math.floor((max + min) / 2)

    if (confirm(`Your number is smaller than ${midNum}?`)) {
        max = midNum
    } else {
        min = midNum
    }
}
alert(`Your number is ${min}`)
alert('Next')