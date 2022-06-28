//문자열 중 특정문자의 갯수 세기

const string = "COMPUTERPROGRAMMING";
const letter = "R";

function solution(str, lett) {
  // console.log(str.split(lett)); //['COMPUTE', 'P', 'OG', 'AMMING'] //split: 배열로 반환
  let answer = str.split(lett).length - 1; //split을 활용해 특정문자 갯수 세기
  return answer;
}

console.log(solution(string, letter)); //3
