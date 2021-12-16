const name ="hana",
    age = 24,
    gender = "female";


const sayHi = (name, age, gender?) =>{
    console.log(`Hello ${name} you are ${age}, you are a ${gender}`)
}
sayHi(name, age); //gender?로 인해 선택가능 잇어도 되고 없어도 됨
export{}