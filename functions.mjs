// function sum(num1, num2) {
//     return this.x * num1 + this.x * num2;
// }
// sum.a = 2;
// sum.call({x:5}, 10, 10);
const point = {
    x: 5,
    y:10
};
function displayPoint(z) {
    console.log(`x:${this.x}; y:${this.y}; z:${z}`)
}
const display = displayPoint.bind(point);
display(40)


export function myBind(thisArg) {
    //TODO
    //apply method "apply"
}