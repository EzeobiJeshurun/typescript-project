function reverseSorted(input: readonly number[]): number[] {
    return input.slice().sort().reverse();
}

const start = [1, 2, 3, 4, 5];
const result = reverseSorted(start);

console.log(result);

type Neat = readonly number[];
type Long = ReadonlyArray<number>;

type Points = readonly [number, number];

function move(point: Points, x: number, y: number): Points {
   return [point[0] + x, point[1] + y];
}

const points: Points = [0,0];
const moved = move(points,10,10);

console.log(moved);// [10,10];
console.log(point);// [0,0];