class Animal {
    constructor(name, award) {
        this.name = name;
        this.award = award;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}, award: ${this.award}`);
    }
}
let cat = new Animal('Cat', 'Gold');
cat.move(20);
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
class NumberQueue extends Queue {
    push(item) {
        super.push(item);
    }
    pop() { return super.pop(); }
}
const queue = new NumberQueue();
queue.push(123);
queue.pop().toPrecision(1);
//using generic type
class QueueGeneric {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    ;
    pop() { return this.data.shift(); }
}
const myQueue = new QueueGeneric();
