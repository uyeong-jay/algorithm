//숫자의 일의 자리 숫자와 
//날짜의 일의 자리 숫자가 같은 것만 세기
//(10부제)

const array = [23, 35, 33, 45, 53];

function solution(arr, day) {
  let answer = 0;
  for (let i of arr) {
    if (i % 10 === day) { //두자리수의 일의 자리 숫자만
      answer++;
    }
  }
  return answer;
}

console.log(solution(array, 3)); //3