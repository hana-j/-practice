//async & await
//clear style of using promise:)
//1. async
async function fetchUser(){
        //do network request in 10 secs...
       return 'hana';
}
const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
    
}
async function getCherry(){
    await delay(3000);
    return '🍒';
}
async function getBanana(){
    await delay(2000);
    return '🍌'
}

async function pickFruits(){
    const cherry = await getCherry();
    const banana = await getBanana();
    return `${cherry} + ${banana}`
}
pickFruits().then(console.log);

//await병렬 처리
async function pickFruits(){
    const cherryPromise = getCherry();
    const bananaPromise = getBanana();
    const cherry = await cherryPromise;
    const banana = await bananaPromise;
    return `${cherry} + ${banana}`
}

//유용한 Promise APIs
function picAllFruits(){
    return Promise.all([getCherry(), getBanana()])
    .then(fruits => fruits.join("+"))
}
picAllFruits().then(console.log)

function pickOnlyOne(){
    return Promise.race([getCherry(), getBanana()]);
    
}
pickOnlyOne().then(console.log);