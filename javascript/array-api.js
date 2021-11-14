// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result1 = fruits.join();
    console.log(result1);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result2 = fruits.split(',');
    console.log(result2);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    
    const array = [1, 2, 3, 4, 5];
    const result3 = array.reverse();
    console.log(result3);
    

  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result4 = array.slice(2,5); // 새로운 배열을 생성시켜줌 
    console.log(result4);
    console.log(array);

    const result = array.splice(2,3);
    console.log(result);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      for(let s of students){
          if(s.score == '90'){
              console.log(s);
      }
  }
  const result = students.find(function(student, index){
    return student.score ===90;
  });
  console.log(result);
  const result1 = students.find((student) => student.score === 90);
}
  // Q6. make an array of enrolled students
  {
      const result6 =students.filter((student) => student.enrolled);
      console.log(result6);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const arr=[];
    for(let s of students){
      arr.push(s.score);
    }
    console.log(arr);

    const result07 = students.map((student)=>student.score);
    console.log(result07);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    
    const result08 = students.some((student) => student.score < 50);
    console.log(result08);
  }
  
  // Q9. compute students' average score
  {
    sum = 0;
    for(let s of students){
      sum += s.score;
    }
    const ave = sum/(students.length);
    console.log(ave);
    ////////////////////////////
    const result9 = students.reduce((prev, curr)=>{
      return prev + curr.score;
    }, 0);
    console.log(result9);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const arr=[];
    for(let s of students){
      arr.push(s.score);
    }
    const result10 = arr.join();
    console.log(result10);

    const result = students.map((student)=> student.score * 2).join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result);
  }
