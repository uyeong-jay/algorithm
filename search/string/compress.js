//중복된 문자 압축 후 개수 표시하기

//문자열Ver
const string = "KKHSSSSSSSE";

const solution = (str) => {
  let answer = "";
  let cnt = 1;
  str = str + " ";
  //문자열의 끝에서 str[i+1]이 가능하도록 하기 위함

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else if (str[i] !== str[i + 1]) {
      answer += str[i]; //문자열 추가

      if (cnt > 1) answer += String(cnt);
      // String() >> 숫자를 문자열로

      cnt = 1; //카운트 초기화
    } else {
      throw new Error("에러");
    }
  }

  return answer;
};

console.log(solution(string)); //K2HS7E

// 배열Ver
// const string = "KKHSSSSSSSE";

// const solution = (str) => {
//   let arr = str.split(""); // 문자열을 배열로

//   let answer = [];
//   let cnt = 1;

//   answer.push(arr[0]); // [ 'K' ] 첫번째 요소는 항상 추가

//   arr.forEach((v, i) => {
//     if (arr[i] === arr[i + 1]) {
//       cnt++;
//     } else if (arr[i] !== arr[i + 1]) {
//       if (cnt > 1) answer.push(cnt); //카운트 추가
//       cnt = 1; //카운트 초기화
//       answer.push(arr[i + 1]); //다음 문자 추가
//     } else {
//       throw new Error("에러");
//     }
//   });

//   return answer.join(""); // 배열을 문자열로
// };
// console.log(solution(string)); //K2HS7E
