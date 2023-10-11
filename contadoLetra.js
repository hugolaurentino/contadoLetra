const palavra = 'palavra especial'

let somaLetraA = 0
for (const letraA of palavra) {
    if (letraA === 'a' || letraA === 'A') {
        somaLetraA++
    }
}
console.log(`Quantas letra a ou A tem: ${somaLetraA}`);