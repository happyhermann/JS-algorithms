//Remove First and Last Character

// 스트링 첫 번쨰와 마지막 것 없애기 

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/solutions/javascript


// //내가 짠 코드 
// const helloWorld = "Hello World";
// const selfReliance = "I am who lly don"; 

// function RemoveCharacter(text) {
//     let array = [];
   
//     array.push(text.charAt(0));
//     array.push(text.charAt(text.length-1));
    
// return array;

//  }

//  RemoveCharacter(helloWorld);
//  RemoveCharacter(selfReliance);

 
//  console.log(RemoveCharacter(helloWorld));
//  console.log(RemoveCharacter(selfReliance));


 // 솔루션 

 //1. 배열 메서드 slice 사용하기 1은 가장 처음, -1은 가장 뒤에 


const helloWorld = "Hello World";
const selfReliance = "I am who lly don"; 

 function removeChar(str) {
     return str.slice(1, -1);
 }

 removeChar(helloWorld);
 removeChar(selfReliance);

console.log(removeChar(helloWorld));

 