"use strict";
//Basic Types
let id;
let company = 'Alperen Media';
let isPublished = true;
let x = 'hello';
let ids = [1, 2, 3];
let arr = [1, true, 'hello'];
//Tuple > specific array data types
let person = [1, 'Alperen', true];
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
];
let productID;
productID = 2;
productID = '2';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Left); //3
console.log(Direction2.Left); //Left
const user = {
    id: 1,
    name: 'john'
};
