type AnimalT = {
    name: string,
    voice(): string
}

function log(animal: AnimalT) {
    console.log(`Animal ${animal.name}: ${animal.voice()}`);
}

class Cats implements AnimalT {
    public name: string
  constructor(name: string){
    this.name = name;
  }
  voice(){return 'meow'}
}