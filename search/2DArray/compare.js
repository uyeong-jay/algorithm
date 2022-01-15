//주변과 비교하는 알고리즘
//자신의 상하좌우 숫자보다 큰 숫자 갯수 세기

const array = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

const solution = (arr) => {
  let answer = 0;
  let n = arr.length;

  // 3차원 좌표
  // 왼쪽위 기준 = (0,0)
  // 위,아래 : x축
  // 왼,오 : y축
  // 위로 한칸(dx, dy) = (-1,0)
  // 오른쪽으로 한칸(dx, dy) = (0,1)
  // 아래로 한칸(dx, dy) = (1,0)
  // 왼쪽으로 한칸(dx, dy) = (0,-1)
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  //위, 오, 아, 왼

  arr.forEach((v1, i) => {
    // i: 위아래(x축)
    arr.forEach((v2, j) => {
      // j: 오왼(y축)

      let flag = 1;
      //flag 변수는 true, false판단을 숫자 0,1을 사용해서 식 or 조건 처럼 쓰고 싶을때 사용한다.

      // arr의 요소하나당 위, 오, 아, 왼 탐색하는 반복문
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; //행 좌표
        let ny = j + dy[k]; //열 좌표
        // 차례로 위 > 오 > 아 > 왼 순으로 탐색
        // arr[i][j] : 원래 좌표
        // arr[nx][ny] : 옮겨진 좌표

        // "모두", "다" <=> "하나만이라도"
        if (
          // 배열 범위를 벗어나지 않기 위한 nx, ny의 조건
          // 1. 항상 0 보다 크거나 같아야된다.
          // 2. 항상 n(arr.length)보다 작아야 된다.
          nx >= 0 &&
          ny >= 0 &&
          nx < n &&
          ny < n &&
          //위의 조건을 만족 시켰을 경우만 밑의 조건 참조
          arr[i][j] <= arr[nx][ny] //(nx, ny)가 상하좌우의 요소중 하나라도 클경우
        ) {
          flag = 0;
          break;
          // break: 해당 반복문을 빠져 나가는 용도.
          // 하나라도 옮겨진 좌표가 크면 정답이 아니기 때문에 나머지를 탐색할 필요가 없으니 break로 반복문을 빠져 나온다.
        }
      }

      // flag: 0(false), 1(true)
      if (flag) answer++;
      // answer++;
    });
  });

  return answer;
};

console.log(solution(array)); //10
