//1. Use strict
//added in ES5
//vanilla js 를 엄격하게 규정해줌 
'use strict';


//2. Variable (read, write)
//let (added in ES6)
let globalName = 'global name';
{
let name ='hana';
console.log(name);
name='hello';
console.log(name);
}
console.log(name);
console.log(globalName);

//var(don't use this!)
//var hoisting(move declaration form bottom to top)
age =4;
var age;
//블럭을 무시함 

//3. Constant, (read only, Immutable data type always)
//장점 : security, thread safety, reduce human mistake
// 선언과 할당이후로는 값을 바꿀수 없다. 

//Note!!!
//Immutable data types : primitive types, frozen objects 
//Mutable data types : all objects by default are mutable in JS

//4. Variable types
//primitive : single number, string, boolean, null, undefine, symbol
//object : box container
//function, first-class function

const count = 17;
const size = 17.2;

console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size} , type : ${typeof size}`);
//연산전에 valid값을 확인하고 사용해야한다. 
const infinity =1/0;
const negativeInfinity =-1/0;
const nAn ='not number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt타입 추가됨 - 크롬, 파이어폭스 지원 
let bigint = 129939399393939939933n;
console.log(`type : ${typeof bigint}`);

//``사용하면 변수와 string을 같이 사용 

//boolean false : 0, null, undefined, NaN & true : any other value

//null 아무거도 없는 값 텅빈값 
let nothing = null;
console.log(`value : ${nothing} : type ${typeof nothing}`);

//undefined 변수에 값이 할당되지 않은 것
let x;
console.log(`value : ${x} , type : ${typeof x}`);

//Symbol : 고유한 값을 할당해야하는 경우 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //=> false 다른 심볼이다!! 

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1===gsymbol2);// =>true
//심볼은 description을 이용해 string으로 변환해주어야 출력이 가능하다 .
console.log(`value :${symbol1.description}, type : ${typeof symbol1}`);

//object , data structure
const hana = {name : 'hana', age : 25}
console.log(hana.name);
hana.name= 'hanaJ';
console.log(hana.name);
//5. Dynamic typing : dynamically typed language =>runtime에 타입이 정해진다 =>이에따른 오류가 많이 발생한다 타입변경이 제제가 없다 => 그래서 typescript가 등장
let text= 'hello';  //string
console.log(text.charAt(0)); //h
console.log(`value : ${text}, type : ${typeof text}`);
text =1; //number
console.log(`value : ${text} , type : ${typeof text}`);
text = '7'+5; //string 
console.log(`value : ${text}, type : ${typeof text}`);
text ='8'/'3'; // number
console.log(`value : ${text}, type : ${typeof text}`);
