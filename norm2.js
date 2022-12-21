alert('Task 2: Let us find out the sum of your invoice and your discount!')
function invoiceSum(sum) {
    let discount;
    sum = +prompt('What is the sum of your purchases?')

    if (sum < 200) {
        alert('Your sum must be at least 200$ to get a discount.')
    }
    else if (sum < 300) {
        discount = (sum * 0.03).toFixed(2)
        alert(`Your discount is 3%. Total sum: ${sum - discount}$`)
    }
    else if (sum < 500) {
        discount = (sum * 0.05).toFixed(2)
        alert(`Your discount is 5%. Total sum: ${sum - discount}$`)
    }
    else if (sum >= 500) {
        discount = (sum * 0.07).toFixed(2)
        alert(`Your discount is 7%. Total sum: ${sum - discount}$`)
    }
    else { alert('Please enter a valid number') }
}
invoiceSum()
alert('Next')
