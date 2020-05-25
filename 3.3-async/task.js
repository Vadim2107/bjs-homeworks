class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        let obj = {};                

        if (id == undefined) {
            throw new Error("Невозможно идентифицировать будильник. Параметр id не передан");            
        }

        const bells = this.alarmCollection.some((bell) => bell.id == id);
        if (bells) {
            console.error("Будильник с таким id уже существует");
            // throw new Error("Будильник с таким id уже существует");
            return;            
        }

        obj.time = time;
        obj.callback = callback;
        obj.id = id;
        this.alarmCollection.push(obj);        
    }

    removeClock(id) {
        const removeBell = this.alarmCollection.filter(bell => bell.id !== id);        
        this.alarmCollection = removeBell;

        return this.alarmCollection;
    }

    getCurrentFormattedTime() {
        // let hours = new Date().getHours();
        // let minutes = new Date().getMinutes();        
        // let currentTime = `${hours}:${minutes}`;
        // if (minutes < 10) {
        //     currentTime = `${hours}:0${minutes}`;
        // }

        // if (hours < 10) {
        //     currentTime = `0${hours}:${minutes}`;
        // }
        let currentTime = new Date().toLocaleTimeString('RU').substr(0, 5);

        return currentTime;
    }

    start() {
        
        const checkClock = (call) => {
            let currentTime = this.getCurrentFormattedTime();
            if (currentTime == call.time) {
                call.callback();
            }
        }        

        if (this.timerId == undefined) {
            
            let newInterval = setInterval(() => this.alarmCollection.forEach(element => checkClock(element)), 10000);
            this.timerId = newInterval;
        }
    }

    stop() {
        if (this.timerId !== undefined) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(bell => console.log(`Будильник N\u2070${bell.id} заведён на ${bell.time}`));
    }

    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection = [];
    }
}    

// let phoneAlarm = new AlarmClock();

// phoneAlarm.addClock("13:10", () => console.log("Пора сделать перерыв."), 1);
// phoneAlarm.addClock("13:11", () => {
//     console.log("Скоро обед. Иди мой руки.");
//     phoneAlarm.removeClock(2);
// }, 2);
// phoneAlarm.addClock("13:12", () => {
//     console.log("Обед. Приятного аппетита!!!");
//     phoneAlarm.clearAlarms();
//     phoneAlarm.printAlarms();
// }, 3);