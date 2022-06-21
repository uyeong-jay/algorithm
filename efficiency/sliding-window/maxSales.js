//Sliding Window
//연속된 K일 동안의 최대 매출액 구하기
const array = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

const solution = (arr, k) => {
  let answer;
  let n = arr.length;
  let sum = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  for (let i = k; i < n; i++) {
    // sliding window 사용
    // i를 기준으로 생각하기
    // sum -= arr[i]; //뒤에 위치한 값
    // sum += arr[i - k]; //앞에 위치한 값
    sum += arr[i] - arr[i - k]; //sliding window

    //Math 사용하는 것 보단 if가 더 효율이 좋아 if 사용하기
    // answer = Math.max(answer, sum);
    if (sum > max) max = sum; //sum이 더 크면 sum이 max값
  }
  answer = max;

  return answer; //56
};

console.log(solution(array, 3));
