// [My Solution]

//수도 코드
//array에 조건에 따라 
//1. no one lieks this 출력 = 비었을떄 조건
//2. 한명 일때는 likes this만 출력 = 1개일때 
//3. 두 명일때는 두개의 요소 사이 And 스트링 넣어서 출력  = 2개일 때 배열사이 'and'
//4. 세 명일 때는 , 하고 and까지 해서 출력 = 3개일때 , + and 


//5. 4명 이상일 때는 2명 콤마 and하고 ' number like this로 출력 = 길이가 4를 넘어가면
// 앞에 있는 2개는 문자열 출력 하고 'and' 넣고 나머지 뒤에 배열에 있는 길이 얻어와서 
// let other 에다가 넣어준 뒤 -> 변수 넣고 백틱으로 likes this 만들어주기 




// const array = ["치윤", "원범", "상훈", "준교", "준규", "크리스"];

// function Wholikes(arr) {
//     let length = arr.length;
//     if (length === 0) {
//         console.log("no one likes this");
//     } else if (length === 1) {
//         console.log(arr[0] + " likes this")
//     } else if (length === 2) {
//         console.log(arr[0] +" and "+ arr[1] +  " likes this" )
//     } else if (length === 3) {
//         console.log(arr[0] +", "+ arr[1] + " and " + arr[2] +  " like this" )

//     } else {
//         let othersNumber = array.length -2
//         console.log(arr[0] + ", "+ arr[1] +  ` and other ${othersNumber} people like this` )
//     }


// }

// Wholikes(array);

https://medium.com/devsoonote/codewars-01-who-likes-it-8be9c5362d57




 