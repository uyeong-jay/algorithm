//세 수를 비교하여 최솟값 구하기

function solution(a, b, c) {
  let answer = 0;
  if (a < b) answer = a; //a,b 비교
  else answer = b;
  if (c < answer) answer = c; //결과값과 c와 비교
  return answer;
}

console.log(solution(1, 2, 3)); //1
