//가장 긴 문자열

const array = ["teacher", "time", "student", "beautiful", "good"];

function solution(arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER; //안전한 최소 정수
  for (let i of arr) { //배열 요소 루프 생성
    if (i.length > max) { //현max보다 클경우
      max = i.length; 
      answer = i; //해당 요소 담기
    }
  }
  return answer;
}
console.log(solution(array)); //'beautiful'