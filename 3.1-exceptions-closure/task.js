// Задача 1

function parseCount(value) {
    if (isNaN(value)) {
        throw new Error('Невалидное значение');        
    }

    return parseInt(value);    
}

function validateCount(value) {    
    try {
        parseCount(value);        
        return parseInt(value); 
    } catch (err) {
        return err;
    }
}

//  Задача 2

class Triangle {
    
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        const sumAb = this.a + this.b;
        const sumAc = this.a + this.c;
        const sumBc = this.b + this.c;

        if (sumAb <= this.c || sumAc <= this.b || sumBc <= this.a) {
            throw new Error('Треугольник с такими сторонами не существует');            
        }
    }    
    
    getPerimeter() {
        return this.a + this.b + this.c;
    }

    // getPerimeter = () => this.a + this.b + this.c;
    
    getArea () {
        const p = (this.a + this.b + this.c) / 2;        
        const area = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** (1 / 2);
        return parseFloat(area.toFixed(3));
    }

    // getArea = () => {
    //     const p = (this.a + this.b + this.c) / 2;        
    //     const area = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** (1 / 2);
    //     return parseFloat(area.toFixed(3));
    // }
}

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c);        
    } catch (error) {
        return {
            getPerimeter() {                
                return 'Ошибка! Неправильный треугольник';
            },
        
            getArea() {                
                return 'Ошибка! Неправильный треугольник';
            }            
        }        
    }
}