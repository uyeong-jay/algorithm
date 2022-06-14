//순위 매기기

const array = [89, 89, 92, 100, 76];

const solution = (arr) => {
  let answer = Array(arr.length).fill(1); //순위 배열 만들기

  //이중반복문 사용
  arr.forEach((v1, i) => {
    arr.forEach((v2, j) => {
      if (v1 < v2) { //순위 비교하기
        answer[i]++;
      }
    });
  });

  return answer;
};

console.log(solution(array)); //[ 3, 3, 2, 1, 5 ]

//tip
//이중반복문: 배열 요소중 하나를 기준으로 나머지 요소들을 탐색해야할때 사용