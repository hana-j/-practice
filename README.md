## TypeScript 

- 함수정의시 인수값 뒤에 ? 를 붙여주면 함수호출시 선택이 가능함 
```
const sayHi = (name, age, gender?) =>{
    console.log(`Hello ${name} you are ${age}, you are a ${gender}`)
}
sayHi(name, age); 
```

