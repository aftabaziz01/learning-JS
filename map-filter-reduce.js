const arr = [5, 1, 3, 2, 6]

// // Double - [10, 2, 6, 4, 12]

// // Triple - [15, 3, 9, 6, 18]

// // Binary - ["101", "1", "11", "10", "110"]

// function double(x) {
//     return x*2;
// }
// // const output = arr.map(double);
// // console.log(output);

// // function triple(x) {
// //     return x*3;
// // }
// // const output = arr.map(triple);
// // console.log(output);

// const output= arr.map(function binary(x) {
//     return x.toString(2);
// });

// console.log(output);

// const output = arr.map((x) => x.toString(2));

// console.log(output);

///////////////----------------Filter

// filter oddvalues 
function isEven(x) {
    return x%2 === 0;
}
// const output = arr.filter(isEven);
// console.log(output);

// finding greater than 4 with arrow function
const output = arr.filter((x) => x > 4);
console.log(output);