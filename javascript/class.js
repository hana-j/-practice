'use strict'; 
//class : template
//object : instance of a class

//1. Class declarations
class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    //method
    speak(){
        console.log(`${this.name} : hello!`);
    }
}
const hana = new Person('hana', 23);
console.log(hana.name);
console.log(hana.age);
hana.speak();

//2. Getter ,Setter 사용자가 값을 잘못 설정해 입력해도 값을 받아올때 방어할 수있는 장치 
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        // if (value <0){
        //     throw Error('age can not be negative');
        // }
        this._age = value <0? 0: value;
    }
}
const user1 = new User('steve', 'Job',-1);
console.log(user1.age);

//3. Fields (public, private)
class Expeiment{
    publicField =2;
    #privateField = 0; //클래스 내부에서만 읽기, 수정가능 
}
const expeiment = new Expeiment();
console.log(expeiment.publicField);
console.log(expeiment.privateField);

//4. static 
class Article{
    static publisher = 'DreamCoding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPubliser(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPubliser();

//5. Inheritance
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;

    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
       return width * this.height;
    }
}
class Rectangle extends Shape{

}
const rectangle = new Rectangle(20,10, 'blue');
rectangle.draw();

//6. class checking : instanceof
console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Object);
console.log(rectangle instanceof Shape);
