//최솟값 구하기

const array = [1, 5, 2, 4, 8];

function solution(arr) {
  let answer;
  let min = Math.min(...arr);
  console.log(Math.min(1, 2, 3));
  // min = Math.min.apply(null, arr)); //null: this는 window
  answer = min;
  return answer;
}
console.log(solution(array)); //1
