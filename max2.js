alert('Task 2: Multiplication table')
function multiply(i, m) {
    let table = []
    let row = ''

    for (let i = 2; i < 10; i++) {
        for (let m = 1; m <= 10; m++) {
            row += `${i} * ${m} = ${i * m}; `;
        }
        table.push(row)
        row = ''
    }
    alert(table)
}
multiply()