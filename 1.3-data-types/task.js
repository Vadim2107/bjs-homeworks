// function calculateTotalMortgage(percent, contribution, amount, date) {
//     'use strict';

//     if (isFinite(percent) == false) {
//     if (isNaN(percent)) {        
//         return `Параметр "процентная ставка" содержит неправильное значение ${percent}.`;
//     }

//     if (isNaN(contribution)) {        
//         return `Параметр "сумма первоначального взноса" содержит неправильное значение ${contribution}.`;
//     }

//     if (isNaN(amount)) {        
//         return `Параметр "сумма кредита" содержит неправильное значение ${amount}.`;
//     }

//     if (isNaN(date)) {        
//         return `Параметр "срок ипотеки" содержит неправильное значение ${date}.`;
//     }    

//     const percentageRate = percent / 100;
//     const credit = amount - contribution;    
//     const period = (date.getFullYear() - new Date().getFullYear()) * 12;
//     const totalAmount = (credit * (percentageRate / 12 + percentageRate / 12 / (((1 + percentageRate / 12) ** period) - 1))) * period;
    
//     console.log(Number(totalAmount.toFixed(2)));    
//     return Number(totalAmount.toFixed(2));
// }

function getGreeting(name) {

    const greeting;
    
    if (Boolean(name) == true) {        
        greeting = `Привет, мир! Меня зовут ${name}`;
    } else {
        greeting = 'Привет, мир! Меня зовут Аноним';        
    }

    console.log(greeting);
    return greeting;    
}