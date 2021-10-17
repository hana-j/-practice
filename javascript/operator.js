'use strict';
//1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals:
1+2=${1+2}`);

//2. Numeric operators
console.log(1 +1);
console.log(1 -1);
console.log(1/1);
console.log(2 ** 3); //제곱 

//3. Increment and decrement operators 
let counter = 2;
const preIncrement = ++counter;
const postIncrement = counter++;

//4. Assignment operators
//5. 
//6. Logical operators : ||, &&, ! ,조건이 복잡하거나 연산이 많은 함수들을 뒤에 조건으로 넣는게 좋다. 
const value1 = true;
const value2 = 4<2;

//|| , 만약 value1의 값이 true이면 뒤에 조건은 연산하지 않고 연산을 끝냄 
console.log(`or :${value1 || value2 || check()}`);

function check(){
    for(let i=0;i<10;i++){
        console.log('^__^');
    }
    return true;
}

//7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality, type conversion
console.log(stringFive === numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion 
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive );

//8.if, else if, else

//9. Ternary operator : ?
//condition ? value2 : vale2;
console.log(name ==='hana'? 'yes': 'no');

//10. switch
const browser ='dd';
switch(browser){
    case 'IE': 
        console.log('go away!');
        break;
    case 'Chorm':
        console.log('I love you');
        break;
    case 'Firefox':
        console.log('log you');
        break;
    default:
        console.log(`I don't know you`);
        break;
}

//11. Loops
let i =3;
while (i>0){
    console.log(`while : ${i}`);
    i--;
}

//do while
do{
    console.log(`do while : ${i}`);
    i--
}while(i>0);

//for while
for(let i=3 ;i>0;i--){
    console.log(`for : ${i}`);
}