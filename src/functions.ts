function add(a: number,b: number):number{
    return a + b;
}

function logVal(message:string): void{
    console.log('LOG',message);
}

function sum(...values: number[]){
    return values.reduce((previous,current)=>{
        return previous + current
    });
}

let addNum: (a:number,b:number)=> number;
addNum = function (a:number, b:number): number {
    return a + b
}

type Add = (a:number,b:number)=> number;

