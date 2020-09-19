let 
credits = 23580
const pricePerDroid = 3000;
let answer = prompt('Сколько дроидов вы хотите купить?')
const totalPrice = answer * pricePerDroid;
if (answer == null){
    console.log('Отменено пользователем!')
}else if(totalPrice > credits){
console.log('Недостаточно средств на счету!')
}else {
    console.log(`Вы купили ${answer}, на счету осталось ${credits - totalPrice} кредитов.`)
}
