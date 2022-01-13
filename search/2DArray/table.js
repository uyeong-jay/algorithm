//합들 중 가장 큰 합
//N*N의 표에서의 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합 출력하기

const array = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

const solution = (arr) => {
  let answer = Number.MIN_SAFE_INTEGER;

  //sum1: 행의 합 / sum2: 열의 합 / sum3: 대각선(정)의 합 / sum4: 대각선(역)의 합
  let sum1 = (sum2 = sum3 = sum4 = 0);

  //행과 열
  arr.forEach((v, i) => {
    sum1 = sum2 = 0; //"초기화" > n행, n열 탐색 > "초기화" > n+1행, n+1열 탐색
    arr.forEach((v, j) => {
      sum1 += arr[i][j]; //행의 합
      sum2 += arr[j][i]; //열의 합
    });
    answer = Math.max(answer, sum1, sum2); //최댓값 담기
  });

  //대각선
  arr.forEach((v, i) => {
    sum3 += arr[i][i]; //대각선(정)의 합
    sum4 += arr[i][arr.length - 1 - i]; //대각선(역)의 합
  });
  answer = Math.max(answer, sum3, sum4); //최댓값 담기

  return answer;
};

console.log(solution(array)); //155
