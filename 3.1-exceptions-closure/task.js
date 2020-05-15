// Задача 1

function parseCount(value) {
    if (isNaN(value)) {
        const valueError = new Error('Невалидное значение');
        throw valueError;
    }

    return parseInt(value);    
}

function validateCount(value) {    
    try {
        if (isNaN(value)) {
            const valueError = new Error('Невалидное значение');
            throw valueError;
        }
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
        this.sumAb = this.a + this.b;
        this.sumAc = this.a + this.c;
        this.sumBc = this.b + this.c;

        if (this.sumAb <= this.c || this.sumAc <= this.b || this.sumBc <= this.a) {
            const valueErr = new Error('Треугольник с такими сторонами не существует');
            throw valueErr;
        }
    }
    
    getPerimeter() {
        const perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    getArea() {
        const p = (this.a + this.b + this.c) / 2;
        const area = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** (1 / 2);
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {

    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
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