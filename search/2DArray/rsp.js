//가위, 바위, 보 결과 매기기
//a와 b의 가바보 결과 출력하기

//1:가위, 2:바위, 3:보
const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];

function solution(a, b) {
  let answer = "";

  // 하나를 정한후 그 하나가 가지는 경우의 수만 고려하는 것으로 해결
  // a를 기준으로 비길때, 이길때, 질때로 기준으로 정함
  for (let i = 0; i < a.length; i++) {
    //비길때
    if (a[i] === b[i]) answer += "D ";
    //이길때
    else if (a[i] === 1 && b[i] === 2) answer += "W ";
    else if (a[i] === 2 && b[i] === 1) answer += "W ";
    else if (a[i] === 3 && b[i] === 2) answer += "W ";
    //질때
    else answer += "L ";
  }

  return answer;
}

console.log(solution(a, b)); // "W L W W D"
