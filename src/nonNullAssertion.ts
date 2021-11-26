type PointProp = {
    x: number,
    y: number,
}

let pointS: Point;

function initialize() {
    pointS = {x: 0, y: 0};
}

initialize()

console.log('After initialized', point!.x, point!.y);