function getSolutions(a, b, c) {
    'use strict';

    const D = b ** 2 - 4 * a * c;    

    if (D < 0) {
        return {
            D: D,
            roots: []
        }
    } else if (D == 0) {
        let x1 = - b / (2 * a);
        return {
            D: D,
            roots: [x1]
        }
    } else if (D > 0) {
        let x1 = ((- b) + D ** (1 / 2)) / (2 * a);
        let x2 = ((- b) - D ** (1 / 2)) / (2 * a);
        return {
            D: D,
            roots: [x1, x2]
        }
    }
}

function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x\u00B2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X\u2081 = ${result.roots}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X\u2081 = ${result.roots[0]}, X\u2082 = ${result.roots[1]}`);
    }
}

function getAverageMark(marks) {
    let sum = 0;
    let averageMark;

    if (marks.length == 0) {
        return 0
    } else {
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        }

        averageMark = sum / marks.length;    
    }

    return averageMark;
}

function getAverageScore(data) {
    let averageResult = {};
    let sumAverageMarks = 0;
    let totalAverageMarks = 0;

    for (let subject in data) {        
        averageResult[subject] = getAverageMark(data[subject]);
        
        sumAverageMarks += averageResult[subject];
        totalAverageMarks++;
        // console.log(`${subject}: ${averageResult[subject]}`);            
    }
    
    if (sumAverageMarks == 0) {
        averageResult.average = 0;
    } else {
        averageResult.average = sumAverageMarks / totalAverageMarks;       
    }

    return averageResult;
}

function getDecodedValue(secret) {
    if (secret == 0) {
        return 'Родриго';
    } else if (secret == 1) {
        return 'Эмильо'
    }
}

function getPersonData(secretData) {

    let personData = {
        // firstName: '',
        // lastName: ''
    };

    
    // let result = '';

    for (let prop in secretData) {
        personData[prop] = getDecodedValue(secretData[prop]);

        personData.firstName = personData.aaa;
        personData.lastName = personData.bbb;
    }

    delete personData.aaa;
    delete personData.bbb;
    
    return personData;
    // return secretData;
}