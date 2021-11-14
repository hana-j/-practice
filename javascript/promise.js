'use strict';

//Promise is a Javascript object for asynchronous operation
//state : pending - > fufilled or rejected
//Producer Vs Consumer

//1. Producer
//when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) =>{
    //doing some heavy work() 서버작업들 (network, read files)
    console.log('doing something ...')
    setTimeout(()=>{{
        //resolve('hana');
        reject(new Error('no network'));
    }},2000)
});

//2. Consumer : then, catch, finally
promise
    .then((value)=>{
        console.log(value);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(()=>{console.log('finally')});


//3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(1), 1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(num-1), 1000)
    });
})
.then(num => console.log(num));

//4. 오류를 잘 처리하자
const getHen = ()=>
    new Promise((resolve, reject)=> {
        setTimeout(()=>resolve('🐓'),1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) =>{
        setTimeout(()=> reject(new Error(`error ! ${hen} => 🥚`)),1000);
    });
const cook = egg =>
    new Promise((resolve, reject)=>{
        setTimeout(() => resolve(`${egg}=>🍳`),1000);
    });

getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(console.log);

