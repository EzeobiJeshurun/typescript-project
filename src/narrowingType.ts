class Cat {
    meow(){
        console.log('meow')
    }
}

class Dog {
    bark() {
        console.log('woof')
    }
}

type AnimalProp = Cat | Dog

function speak(animal: Animal){
    if(animal instanceof Cat){
        animal.meow()
    }
    if(animal instanceof Dog){
        animal.bark();
    }
}

type Square = {
    size:number
}

type Rectangle = {
    width: number,
    height: number
}

type Shape = Square | Rectangle;

function area(shape: Shape){
    if('size' in shape){
     return shape.size * shape.size;
    }
    if('width' in shape) {
        return shape.width * shape.height;
    }
}

area({size: 2});
area({width: 2, height: 4})

