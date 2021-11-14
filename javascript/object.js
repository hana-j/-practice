'use strict';
//Objects
//object = {key : value};

//1. Literal and properties
const obj1 ={}; //'object literal'
const obj2 = new Object(); //'object constructor'

const hana = {name: 'hana', age : 24};
print(hana);

//이런가 가능함 동적으로 데이터 생성 삭제 
hana.hasJob = true;
delete hana.hasJob;

//2. Computed properties
//key should be always string
console.log(hana.name);
console.log(hana['name']);
hana['hasJob']= true;
console.log(hana.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(hana, 'name');
printValue(hana, 'age');

//3. Property value shorthand
const person1 = {name : 'bob', age: 2};
const person2 = {name : 'steve', age: 4};
const person3 = {name : 'hana', age: 23};
const person4 = new Person('jin', 34);
console.log(person4);

//4. Constructor Function
function Person(name, age){
    //this={};
    this.name;
    this,age;
    //return this;

}

//5. in operator : property existence check(key in obj)
console.log('name' in hana); //T
console.log('age' in hana);  //T
console.log('random' in hana); //F
console.log(hana.random);  //undefined

//6. for ..in vs for ..of

console.clear();
//for (value of iterable)
const array = [1,2,3,4];
for (let value of array) {
    console.log(value);
}
//for (key in obj)
for  (let key in hana){
    console.log(key);
}


//7. cloning
const user = {name : 'hana', age: 24}
const user2 = user;
user2.name = 'coder';
console.log(user);

//방법 1 old way
const user3={};
for(let key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

//방법 2 object assign
const user4 = Object.assign({}, user);;
console.log(user4);

const fu1 = {color : 'red'};
const fu2 = {color : 'blue', size: 'big'};    
const mix = Object.assign({}, fu1, fu2);  //뒤에 데이터가 덮어 쓴다  
console.log(mix.color);
console.log(mix.size);