//가운데 문자 출력하기

const string = "computer";

function solution(str) {
  let answer;
  let midString = Math.floor(str.length / 2);
  if (str.length % 2 === 1) {
    //문자가 홀수일 경우

    // 잘라내기
    answer = str.substr(midString, 1);
    // answer = str.substring(midString, midString + 1);
  } else {
    //문자가 짝수일 경우

    answer = str.substr(midString - 1, 2);
    // answer = str.substring(midString - 1, midString + 1);
  }

  return answer;
}

console.log(solution(string));

//tip
// 하나씩 탐색해야될 필요가 있을때 for문 쓰기
// 바로 원하는 부분이 필요하면 for문 생략후 if쓰기
