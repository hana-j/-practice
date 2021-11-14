//Function
//-fundamental building block in the program
//-subprogram can be used multiple times

//1. Function declaration
//function name(param1, param2){body ''' return ;}
//one function === one thing (한개의 함수는 한가지의 일만 해야한다.)
//naming : doSomething (command)
//function is Object in JS 
function printHello(){
    console.log("Hello");
}
printHello();

function log(message){
    console.log(message);
}
log('Hello hana');

//2. Parameters
//premitive parameter : passed by value
//object parameters :passed by reference

function changeName(obj){
    obj.name ='coder';
}
const ellie = {name : 'ellie'}
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from ='unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. Rest parameters 
function printAll(...args){
    for(let i =0;i<args.length;i++){
        console.log(args[i]);
    }
    for(const arg of args){    //간펴한 for문과 유사하네 
        console.log(arg)
    }
}
printAll('hana', 'coding', 'hello')

//5. Local scope  밖에서는 안이 보이지 않고 안에서는 밖을 볼 수 있다. 
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'local';  //
    console.log(message); //local variable
    console.log(globalMessage);
}
printMessage();

//6. Return a value 
function sum(a,b){
    return a+b;
}
const result = sum(1,2);
console.log(`sum : ${sum(1,2)}`);

//7. Early return , early exit
//나쁜 예 
function updradeUser(user){
    if(user.point>10){
     //비즈니스 로직 ....
    }
}
//good
function updradeUser(user){
    if(user.point <=10){
        return;
    }
    // 비즈니스 로직 ...
}


//1. Function expression
const print = function(){     //anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,2));

//2. CallBack function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
//anonymous function
const printYes = function(){
    console.log('yes!');
}
//named function -디버깅 할때 함수명 사용, 함수내에서 자기자신을  호출할 때 사용 
const printNo = function print(){
    console.log('No!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow fucntion -> always anonymous
const simplePrint = function(){
    console.log('simplePrint');
}
// function 지우고 block지우고 화살표 추가 ! 
const simplePrin1 = () => console.log('simplePrint');
const add =(a,b) =>a+b;
//조금더 복잡한 로직이 필요하면
const multiple =(a,b) =>{
    //logic
    return a*b;
};


//IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

//미니 실습 
function calculate(command, a,b){
    switch(command){
        case 'add':
            console.log(`${a+b}`);
            break;
        case 'sub':
            console.log(`${a-b}`);
            break;
        case 'div':
            console.log(`${a/b}`);
            break;
        case 'mul':
            console.log(`${a*b}`);
            break;
        case 'rem':
            console.log(`${a**b}`);
            break;
        default:
            throw Error('unknown command');
    }
}
calculate('add', 3,4);
calculate('rem', 2,3);

//reduce 함수 (배열의 합을 구하는 함수)
const arr = [1,2,3];
const result2 = arr.reduce(function add(sum, curValue){
    return sum+curValue;
}, 0);
console.log(result2);
