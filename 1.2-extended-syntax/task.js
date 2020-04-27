function getResult(a,b,c){
    'use strict';

    let d = b ** 2 - 4 * a * c;
    let x1 = ((- b) + d ** (1 / 2)) / (2 * a);
    let x2 = ((- b) - d ** (1 / 2)) / (2 * a);
    let x;

    if (d < 0) {
        x = [];
    } else if (d == 0) {
        x = [x1];        
    } else if (d > 0) {
        x = [x1, x2];
    }

    return x;
}

function getAverageMark(marks){
    
    let sum = 0;
    let averageMark;    
    
    if (marks.length > 5) {
        console.log('Количество оценок больше 5');
        marks = marks.slice(0, 5);
    } else if (marks.length == 0) {
        return 0;
    }
    
    for (let i = 0; i < marks.length; ++i) {
        sum += marks[i];
        averageMark = sum / marks.length;
    }

    return averageMark;
}

function askDrink(name, dateOfBirthday){    
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result;

    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else if (age < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
    
    return result;
}