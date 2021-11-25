const point = {
    x: 4,
    y: 6
};
// trying to change point.x = 35 will raise an error as its readonly
class AnimalFarm {
    //public readonly name: string     is valid
    constructor(name) {
        this.name = name;
    }
}
const sheep = new AnimalFarm('Cow');
console.log(sheep.name);
//trying to change the name like sheep.name = "dog" will raise error
