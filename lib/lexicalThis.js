class Person {
    constructor(_age) {
        this._age - _age;
    }
    growOld() {
        this._age++;
    }
    age() {
        return this._age;
    }
}
//use arrow fuctions: it captures this from the surrounding context
class Human {
    constructor(_age) {
        this.growOld = () => {
            this._age++;
        };
        this.age = () => {
            return this._age;
        };
        this._age - _age;
    }
}
