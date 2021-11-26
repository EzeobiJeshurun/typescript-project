//when we use ! as shown below, it tells typescript that the declaration must be assigned
//so it does'nt show error
let dice!: number;

function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
}

rollDice();

console.log('Current Dice Value', dice);
