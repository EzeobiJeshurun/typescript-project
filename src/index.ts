let message: string = 'Hello world';
console.log(message);

let penta: symbol = Symbol('star');
//let biggy: bigint = 24n;

let regexp = new RegExp('ab+c')
let array: Array<number> = [1,2,3];
//another way for arrays
let secondArray: number[] = [1,2,3];

let set: Set<number> = new Set([1,2,3]);

//array of fixed length
let tuple: [number,number] = [2,4];

let center: {x:number,y:number} = {
    x: 0,
    y: 0,
}

type Point = {x: number, y: number}

let unit: Point = {
    x: 2,
    y: 3
}

type User = {id: string}
type Product = {id: string}

let user: User = {id: "raph-234"}
let product: Product = {id: "yam-4556"}

type Point2D = {x:number, y:number};
type Point3D = {x:number, y:number, z:number}

let point2D: Point2D = {x:0, y: 3};
let point3D: Point3D = {x:4, y:3, z:4};

/** Extra info is ok */
point2D = point3D;

function takesPoint2D(point:Point2D){/** */}
takesPoint2D(point3D)








