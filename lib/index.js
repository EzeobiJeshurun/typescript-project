let message = 'Hello world';
console.log(message);
let penta = Symbol('star');
//let biggy: bigint = 24n;
let regexp = new RegExp('ab+c');
let array = [1, 2, 3];
//another way for arrays
let secondArray = [1, 2, 3];
let set = new Set([1, 2, 3]);
//array of fixed length
let tuple = [2, 4];
let center = {
    x: 0,
    y: 0,
};
let unit = {
    x: 2,
    y: 3
};
let user = { id: "raph-234" };
let product = { id: "yam-4556" };
let point2D = { x: 0, y: 3 };
let point3D = { x: 4, y: 3, z: 4 };
/** Extra info is ok */
point2D = point3D;
function takesPoint2D(point) { }
takesPoint2D(point3D);
