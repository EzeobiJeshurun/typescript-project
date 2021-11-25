class Animal {
   private name: string;
   protected award: string;

    constructor(name: string, award: string) {
        this.name = name;
        this.award = award
    }

    move(distanceInMeters: number): void{
        console.log(`${this.name} moved ${distanceInMeters}, award: ${this.award}`)
    }
}

let cat = new Animal('Cat','Gold')
cat.move(20);

class Queue {
    data: any = [];
    push(item: any){
        this.data.push(item)
    }
    pop(){
        return this.data.shift();
    }
}

class NumberQueue extends Queue {
    push(item: number){
        super.push(item)
    }
    pop(): number { return super.pop()}
}
const queue = new NumberQueue();
queue.push(123);
queue.pop().toPrecision(1);

//using generic type

class QueueGeneric<T> {
    data: any = []
    push(item: T) {
        this.data.push(item);
    };
    pop(): T {return this.data.shift()}
}

const myQueue = new QueueGeneric<number>()