//회의실 배정 문제
//정렬과 그리디 알고리즘 사용 

const array = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7]
]

const solution = (meeting) => {
  let answer = 0;

  meeting.sort((a,b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  })
  
  //비교를 해야될때에는 변수가 하나 있어야됨
  endTime = 0;
  for (x of meeting) {
    if (endTime <= x[0]  ) {
      answer++;
      endTime = x[1];
    }
  }


  return answer;
}

console.log(solution(array));