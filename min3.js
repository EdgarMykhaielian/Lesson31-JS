alert('Task 3: In this task we will add all the numbers in your range.')
let a = Number(prompt('Please type in the first number', '1'))
let b = Number(prompt('Type in the last number', '100'))
let sum = 0
while (a <= b) {
    sum += a;
    a++;
}
alert(`The result is ${sum}`)
alert('Let us continue')