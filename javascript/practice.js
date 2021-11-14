//함수선언
function doSomething(add){
    console.log(add);
    const result = add(4,5);
    console.log(result);
  }
  function add(a,b){
    const sum = a+b;
    return sum;
  }
  //함수 호출
  doSomething(add);
  // const result = add(1,2);
  // console.log(result);
  
  //함수를 변수에 할당
  const addFun = add;
  console.log(add);
  addFun(1,2);
  
  //list 메서드 
  //1. Filter
  const userList =[
      {userId:"1", userName:"hana", phone:"010-5111-1111", address:"seoul"},
      {userId:"2", userName:"duna", phone:"010-5111-2222", address:"Daegu"},
      {userId:"3", userName:"sena", phone:"010-5111-3333", address:"Anyang"}
  
  ];
  //for문사용
  var selectedUserInfo ={};
  for(var i =0 ;i<userList.length; i++){
    if(userList[i].userId =="2"){
      selectedUserInfo = userList[i];
    }
  }
  console.log(selectedUserInfo);
  console.log('-------------')
  //filter 사용
  var selectedUserInfo2 = userList.filter(u =>(u.userId=="2" || u.userId =="3"));//[0]은 인덱스 값
  console.log(selectedUserInfo2);
  
  //2.map 함수를 실행하는 모든 배열의 아이템에 function을 실행하는 메서드 
  //그 함수의 결과 값으로 새로운 배열을 생성한다. 
  const days = ["Mon", "Tue", "Wed", "Thu","Fri", "Sat", "Sun"];
  const smilingDays = days.map((el,idx)=>(idx+1)+':'+el+'😄')
  const smilingDays1 = days.map(val => `🙂${val}`)
  console.log(smilingDays)
  console.log(smilingDays1)