function add(a, b) {
    return a + b;
}
function log(message) {
    console.log('LOG', message);
}
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
let addNum;
addNum = function (a, b) {
    return a + b;
};
