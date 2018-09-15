// Boolean

let isDone: boolean = false;

// Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
// can use double quotes or single quotes. but, choose one side only.
let color: string = 'blue';
color = 'red';

// back quote can use too.
let fullName: string = `Kim Jungi`;
let age: number = 29;
let sentence: string = `Hello, my name is ${ fullName}`;

// Array
// can be written in one of two ways.
let list: number[] = [1, 2, 3];
// other type is a generic.
let list2: Array<number> = [1, 2, 3];

// Tuple
// Tuple type 은 엘리멘트 접근할 때의 문제등이 있어서, 잘 쓰지 않는다.
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10];
// incorrect
// x = [10, 'hello'];

// Enum
// by default, enums begin numbering their members starting at 0.
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
//Or, even manually set all the values in the enum:
enum Color2 { Red = 1, Green = 3, Blue = 4}
let c2: Color2 = Color2.Green;




