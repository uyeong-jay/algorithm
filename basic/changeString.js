//특정문자만 다른 문자로 바꾸기

const string = "BANANA";

function solution(str) {
  let answer = "";

  for (let i of str) { //문자열 요소 루프
    if (i === "A") answer += "#"; //A일때는 #추가
    else answer += i; //나머지 그대로
  }

  return answer;
}

console.log(solution(string)); //'B#N#N#'