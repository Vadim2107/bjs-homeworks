function getAnimalSound(animal) {
    'use strict';

    if (animal == undefined) {
        return null;
    }
    
    const sound = animal.sound;

    if (animal !== undefined) {
        return sound;
    }    
}

function getAverageMark(marks) {
    'use strict';
   
    let sum = 0;
    let average;
    let roundedAverage;

    if (marks.length == 0) {
        return 0
    } else {
        for (let i = 0; i < marks.length; i++) {
            sum += Number(marks[i]);
        }

        average = sum / marks.length;
        roundedAverage = Math.round(average);
    }    

    return roundedAverage;    
}

function checkBirthday(birthday) {
    'use strict';

    birthday = +new Date(birthday);

    let now = Date.now();
    let diff = now - birthday;    
    let age = Math.floor(diff / (365.25  * 24 * 3600 * 1000 ));
    let verdict;

    if (age >= 18) {
        verdict = true;
    } else {
        verdict = false;
    }

    return verdict;
}