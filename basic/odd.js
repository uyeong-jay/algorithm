//홀수의 합, 홀수 중 최소값 구하기

const array = [4, 8, 7, 3, 6];

function solution(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;//안전한 최대 정수

  for (let i of arr) { //배열 요소 루프 생성
    if (i % 2 === 1) { //홀수만 누적 합
      sum += i;
      if (i < min) { //min보다 작으면 최솟값
        min = i; 
      }
    }
  }

  answer.push(sum);
  answer.push(min);

  return answer;
}
console.log(solution(array)); //[10, 3]