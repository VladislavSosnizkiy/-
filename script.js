//Місячний вклад//
function calculateTrast(amount, rate, months){
    const monthlyRate = rate / 12 / 100;
    const trast = amount * monthlyRate * months;
    return trast;
}

const depositeAmount = parseFloat(prompt("Put in the sum") );
const depositeRate = 5;
const depositeMonths = 2;
const trastAmount = calculateTrast(depositeAmount, depositeRate, depositeMonths);

console.log(`${trastAmount}`);


//Що поверне вираз//
// 2 && 0 && 3 return 0 (false)//
// 2 || 0 || 3 return 2 (true)//
//2 && 0 || 3 return 3 (true)//

//Тризначне задом наперед//
const number = parseInt(prompt("Put in number"));

const num1 = Math.floor (number / 100);
const num2 = Math.floor ((number % 100) / 10);
const num3 = number % 10;
const reverseNumber = num3 * 100 + num2 * 10 + num1;

console.log(`${reverseNumber}`)