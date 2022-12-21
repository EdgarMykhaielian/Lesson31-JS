alert('Task 1: Palindrome')
isPalindrome(getValidNumberFromUser())
alert('Next task')

function isPalindrome(userNumber) {
  let Palindrome = userNumber.split('').reverse().join('');

  if (userNumber === Palindrome) {
    alert(`Your number ${userNumber} is a Palindrome!`)
  }
  else {
    alert(`Your number ${userNumber} is NOT a Palindrome`)
  }
}

function getValidNumberFromUser() {
  const regex = /^\d{5}$/
  let str = 'Type in a 5-digit number and I will tell if it is a palindrome.'
  let userNumber

  do {
    userNumber = prompt(str) || ''
    str = 'Please type in a 5-digit number!'
  } while (!userNumber.match(regex))

  return userNumber
}


