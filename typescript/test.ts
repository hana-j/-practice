function hello(b:number){

}
hello(12);
//type
function add (n1:number  ,n2 :number){
    return n1+n2;
}
//boolean
let isDone:boolean = false;
console.log(typeof isDone);

let isOk:Boolean = true;
console.log(typeof isOk);

//number
let decimal:number = 8;
let hex:number = 0xf00d;
let binary:number = 0b1010;
let octal:number = 0o744;
let notaNumber :number = NaN;
let uderscoreNum : number = 1_000_000;
console.log(decimal, hex, binary, octal, uderscoreNum)

//string 
let myName : string = 'hana';
myName = 'Hana';

let age :number =39;
let sentence :string =`Myname is ${myName}(${age})`;
console.log(sentence);

//symbol
const hana = Symbol('hana');
console.log(hana);
console.log(Symbol('foo')==Symbol('foo')); //false
const sym = Symbol();
const obj ={
    [sym]:"value"
};

console.log(obj[sym]);

//object : "primitive type"이 아닌 것을 나타내고 싶을 때 사용하는 타입
//primitive type : number, string, boolean, symbol, null, undefined
const person2 = Object.create({name:"hana", age: 23})

//Array :배열안의 요소들은 같은 타입을 사용
// 방법 : Array<type> ||  type[]
let list: (number|string)[] =[1,2,3,"4"]; //이 방법을 더 선호 
let list1: Array<number> = [2,3,4];

//Tuple
let x: [string, number];

x =["hello", 88]; //순서와 타입 길이 모두 맞아야함
x[1] = 50;
console.log(x);

const person: [string, number] = ["Hana", 25];
const [first, second] = person;
console.log(first, second);
