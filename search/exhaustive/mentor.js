//블루투포스(완전탐색): 멘토링

//이중 배열시 가로 세로 로 놓아 인덱스로 구분 해주기
const array = [
  [3, 4, 1, 2], //3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등 을 의미
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

const solution = (arr) => {
  let answer = 0;

  m = arr.length; // 테스트수(세로)
  n = arr[0].length; // 학생수(가로1줄)

  // i: 멘토학생번호(세로)
  for (let i = 1; i <= n; i++) {
    //j: 멘티학생번호(가로)
    for (let j = 1; j <= n; j++) {
      // 1번의 테스트에서 멘토 등수 < 멘티 등수 인 경우 수
      let cnt = 0;

      // k: 테스트수(세로)
      for (let k = 0; k < m; k++) {
        let pi; //멘토학생의 등수
        let pj; //멘티학생의 등수

        //s: 등수(가로)
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) pi = s; //배열의 요소(arr[k][s])가 멘토학생의 번호(i) 이면 그때의 등수(s)가 멘토학생의 등수(pi) 가 되도록함
          if (arr[k][s] === j) pj = s; //배열의 요소(arr[k][s])가 멘티학생의 번호(j) 이면 그때의 등수(s)가 멘티학생의 등수(pj) 가 되도록함
        }

        if (pi < pj) cnt++;
        // 등수는 작을 수록 높기 때문에 부등호는 반대로 해줌
        // 1번의 테스트에서 멘토 등수 < 멘티 등수 일 경우 >> cnt++
      }

      if (cnt === m) answer++; // 테스트 3번(arr.length) 모두 멘토 등수 < 멘티 등수 일 경우 >> 멘토,멘티 짝 성사 >> answer++;
    }
  }

  return answer;
};

console.log(solution(array));
