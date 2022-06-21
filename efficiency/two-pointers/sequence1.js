//Two Pointers
//효율성을 위해 이중반복문 대신 two-pointers 로 해결하기
//연속된 부분 배열의 합이 특정숫자 m이 되는 경우의 수 구하기
const array = [1, 2, 1, 3, 1, 1, 1, 2];

const solution = (arr, m) => {
  let answer = 0;
  let rightMinus = (rightPlus = 0); //배열 인덱스
  //rightMinus (pointer1)
  //rightPlus (pointer2)
  let n = arr.length;
  let sum = 0;

  //(전체)
  while (rightPlus < n) {
    if (sum < m) {
      sum += arr[rightPlus++];
      //sum += arr[rightPlus]; 실행 후
      //rightPlus++; 실행 됨
      if (sum === m) answer++;
    }

    //(앞 일부분)
    //여러개를 빼야 할경우 (while)
    while (sum >= m) {
      sum -= arr[rightMinus++];
      //rightMinus++;
      if (sum === m) answer++;
    }
  }

  return answer; //3
};

console.log(solution(array, 6));
