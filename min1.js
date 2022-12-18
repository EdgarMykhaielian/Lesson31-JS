alert('Task 1: Let us determine who you are.')
let userAge = prompt('How old are you?')
if (userAge.match(/^-?\d+$/) && userAge >= 0) {
    if (userAge <= 11) {
        alert('You are an infant!')
    } else if (userAge <= 17) {
        alert('You are a teenager!')
    } else if (userAge <= 59) {
        alert('You are an adult!')
    } else if (userAge > 60) {
        alert('You are a pensioner!')
    }
} else {
    alert('This is not a valid age!')
}
alert('Next puzzle')