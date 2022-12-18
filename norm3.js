alert('Task 3: Type in 10 numbers and i will tell you how many of them are negative, positive, even, odd and zero')
let negative = 0
let positive = 0
let zero = 0
let even = 0
let odd = 0
for (let i = 0; i < 10; i++) {
   const num = +prompt(`Number ${[i + 1]}:`)

   if (num < 0) negative++
   else if (num > 0) positive++
   else zero++

   if (num % 2) odd++
   else even++

}
alert(`Negative: ${negative}
Positive: ${positive}
Zero: ${zero}
Even: ${even}
Odd: ${odd}`)
alert('Next')