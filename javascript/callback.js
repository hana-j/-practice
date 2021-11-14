'use strict';

//Javascript is synchronous.
//Excute the code block in order after hoisting
//hoisting : var, function declaration

console.log('1');
setTimeout(() =>
    console.log('2'),1000);
console.log('3');

//Synchronous callback (동기) 호이스팅으로 함수선언이 가장 위로 올라가 실행 
function printImmediately(print){
    print();
}
printImmediately(()=> console.log('hello'));

//Asynchronous callback(비동기)
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);

//Callback hell
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id ==='hana' && password ==='dream') ||
                (id === 'coder' && password === 'academy')

            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'hana'){
                onSuccess({name:'hana', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id =prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user=>{
        userStorage.getRoles(
            user, 
            userWithRole =>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error =>{
        console.log(error);
        }
    );