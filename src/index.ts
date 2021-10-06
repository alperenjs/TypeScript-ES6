//Basic Types
let id: number;
let company: string = 'Alperen Media';
let isPublished: boolean = true;
let x: any = 'hello';

let ids: number[] = [1, 2, 3];
let arr: any[] = [1, true, 'hello'];

//Tuple > specific array data types
let person: [number, string, boolean] = [1, 'Alperen', true];

let employee: [number, string][];

employee = [
    [1, 'Brad'],
    [2, 'John'],
]

let productID: string | number;
productID = 2;
productID = '2';

//Enum
enum Direction1 {
    Up=1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction1.Left) //3
console.log(Direction2.Left) //Left


//Objects

// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'john'
// }
type User = {
    id: number,
    name: string
}
const user: User= {
    id: 1,
    name: 'john'
}

//todo > add es6 object class works before TS