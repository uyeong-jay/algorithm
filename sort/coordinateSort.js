//좌표정렬: 좌표를 배열.sort(() => {}) 로 정렬 시켜보기

const array = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

const solution = (arr) => {
  let answer = arr; //let answer = [...arr];
  // 얕은 복사 - answer나 arr 둘중하나라도 바뀌면 둘다 바뀐다.

  arr.sort((a, b) => {
    //두번째 요소 정렬
    if (a[0] === b[0]) return a[1] - b[1]; //첫번째 요소 끼리 같으면 a[1] - b[1](앞-뒤)로 두번째 요소를 오름차순으로 정렬하기

    //첫번째 요소 정렬
    return a[0] - b[0]; //첫번째 요소 끼리 다르면 a[0] - b[0](앞-뒤)로 첫번째 요소를 오름차순으로 정렬하기
  });

  return answer;
  //[ [ 1, 2 ], [ 1, 3 ], [ 2, 5 ], [ 2, 7 ], [ 3, 6 ] ]
};

console.log(solution(array));
