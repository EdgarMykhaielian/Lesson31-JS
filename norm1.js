alert('Task 1: Palindrome')
function ifPalindrome(userNumber = prompt('Type in a 5-digit number and i will tell if it is a palindrome.')){
let regex = /^\d{5}$/
let Palindrome = userNumber.split('').reverse().join('');
if (userNumber.match(regex)) {
  if (userNumber === Palindrome) {
    alert(`Your number ${userNumber} is a Palindrome!`)
  }
  else {
    alert(`Your number ${userNumber} is NOT a Palindrome`)
  }
} else {
  alert('Please type in a 5-digit number!')
}
}
ifPalindrome()
alert('Next task')
