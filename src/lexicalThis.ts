class Person {
    private _age: number
    constructor(_age: number){
        this._age - _age
    }

    growOld(){
        this._age++;
    }
    age(){
        return this._age;
    }
}

//use arrow fuctions: it captures this from the surrounding context

class Human {
    private _age: number
    constructor(_age: number){
        this._age - _age
    }

    growOld=()=>{
        this._age++;
    }
    age=()=>{
        return this._age;
    }
}
