class Weapon {
    constructor (obj) {
        this.name = obj.name;
        this.attack = obj.attack;
        this.durability = obj.durability;
        this.range = obj.range;
        this.beginDurability = obj.durability;
    }

    takeDamage(damage) {
        
        this.durability -= damage;
        
        if (this.durability < 0) {
            this.durability = 0;
        }        
    }

    getDamage() {
        let levelDurability = (this.durability * 100) / this.beginDurability;

        if (levelDurability >= 30 || this.durability == Infinity) {            
            return this.attack;
        } else if (levelDurability < 30 && levelDurability > 0) {            
            return this.attack / 2;
        } else if (levelDurability == 0) {
            return 0;
        }
    }

    isBroken() {
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}

class Arm extends Weapon {
    constructor() {
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1,});        
    }
}

class Bow extends Weapon {
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3,
        });
    }    
}

class Sword extends Weapon {
    constructor() {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1,
        });
    }    
}

class Knife extends Weapon {
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1,
        });
    }
}

class Staff extends Weapon {
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2,
        });
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;        
    }    
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;        
    }    
}

// const oldSword = new Weapon({
//     name: 'Старый меч',
//     attack: 20,
//     durability: 10,
//     range: 1,
// });

const arm = new Arm();    

const bow = new Bow();    

const sword = new Sword();

const knife = new Knife();    

const staff = new Staff();
    
const longBow = new LongBow();
    
const axe = new Axe();

const stormStaff = new StormStaff();

// Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        let amountGrade = [];
        amountGrade.push(grade);

        

        for (let i = 0; i < amountGrade.length; i++) {
            if (grade > 5 || grade <= 0 || isFinite(grade) == false) {
                console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
                return amountGrade.length = 0;
            }

            return amountGrade.length;            
        }

        // return amountGrade.length;
        // return amountGrade;
    }

    getAverageBySubject(subject) {

    }

    getTotalAverage() {

    }
}

const log = new StudentLog('Олег Никифоров');
// console.log(log.name);
// console.log(log.getName()) // Олег Никифоров

console.log(log.addGrade(3, 'algebra')); // 1
// console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0
// console.log(log.addGrade(4, 'algebra')); // 2
// console.log(log.addGrade(5, 'geometry')); // 1
// console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1
