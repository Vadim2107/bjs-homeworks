function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';

    // if (isFinite(percent) == false) {
    if (isNaN(percent)) {        
        return `Параметр "процентная ставка" содержит неправильное значение ${percent}.`;
    }

    if (isNaN(contribution)) {        
        return `Параметр "сумма первоначального взноса" содержит неправильное значение ${contribution}.`;
    }

    if (isNaN(amount)) {        
        return `Параметр "сумма кредита" содержит неправильное значение ${amount}.`;
    }

    if (isNaN(date)) {        
        return `Параметр "срок ипотеки" содержит неправильное значение ${date}.`;
    }

    percent = percent / 100;
    let credit = amount - contribution;    
    let period = (date.getFullYear() - new Date().getFullYear()) * 12;
    let totalAmount = (credit * (percent / 12 + percent / 12 / (((1 + percent / 12) ** period) - 1))) * period;
    
    console.log(Number(totalAmount.toFixed(2)));    
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {

    let greeting;
    
    if (Boolean(name) == true) {
        greeting = `Привет, мир! Меня зовут ${name}`;
    } else {
        greeting = 'Привет, мир! Меня зовут Аноним';        
    }

    console.log(greeting);
    return greeting;
}