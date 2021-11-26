let notDefined: undefined = undefined;
let notPresent: null = null

console.log(null == null); //true
console.log(undefined == undefined)//true
console.log(undefined == null) //true



console.log(false == null) //false
console.log(0 == null) //false
console.log('' == null)//false


function decorate(value: string | null | undefined){
    if(value == null){
        return value;
    }
    return `--${value.trim()}--`
}