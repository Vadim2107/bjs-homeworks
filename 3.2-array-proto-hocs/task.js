function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на секунду.
    sleep(1000);
    return args.reduce((sum, arg) => {return sum += +arg;}, 0);
}

/* Вспомогательную функцию compareArrays( arr1, arr2 ), 
которая с помощью функции высшего порядка сравнивает значения двух массивов.
Используйте метод every сравниваем элементы одного массива 
с соответствующими элементами другого массива. */

function compareArrays(arr1, arr2) {

    return arr1.length == arr2.length &&        
    arr1.every((element, index) => element === arr2[index]);    
}

function memorize(fn, limit) { // Функция оптимизации
    
    let memory = [];    

    return function (...args) {
        let obj = {};
        
        /* С помощью функции find ищем в массиве memory, объект, у которого
        в свойстве args находится такой же массив, как и массив аргументов
        с которыми была вызвана возвращаемая memorize функция */
        
        let object = memory.find(element => compareArrays(element.args, args));
        if (object) {
            return object.result;            
        }

        obj.args = args;
        obj.result = fn(...args);
        memory.push(obj);       

        if (memory.length > limit) {
            memory.shift(obj);
        }

        // console.log(memory);
        return fn(...args);
    }    
}

const mSum = memorize(sum, 5);

function testCase(testFunction, nameTimer) {
    const testArray = [[1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4]];
    
    console.time(nameTimer);
    for (i = 0; i < 10; i++) {
// Разделение массива аргументов на аргументы и применение тестовой функции к аргументам
        testArray.forEach((arr) => testFunction(...arr));
        // testArray.forEach((arr) => testFunction.apply(null, arr); // или так
    }

    console.timeEnd(nameTimer);
}

/* С задержкой времени:

testCase(sum, 'timer_1');
timer_1: 50050.864990234375ms
testCase(mSum, 'timer_2');
timer_2: 6005.81591796875ms

Без задержки времени:

testCase(sum, 'timer_1');
timer_1: 0.1748046875ms
testCase(mSum, 'timer_2');
timer_2: 0.36083984375ms */