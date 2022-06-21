//Two Pinters 알고리즘
//효율성을 위해 sort() 대신 two-pointers 로 해결하기
//두 오름차순 배열을 합쳐 오름차순으로 출력하기

array1 = [1, 3, 5];
array2 = [2, 3, 6, 7, 9];

const solution = (arr1, arr2) => {
  let answer = [];

  const n = arr1.length;
  const m = arr2.length;

  let p1 = (p2 = 0);
  //arr1의 인덱스 (pointer1)
  //arr2의 인덱스 (pointer2)

  while (p1 < n && p2 < m) {
    if (arr1[p1] < arr2[p2]) {
      answer.push(arr1[p1++]);
      // answer.push(arr1[p1]); 실행 후
      // p1++; 실행
    } else {
      answer.push(arr2[p2++]);
    }
  }
  //p1 < n && p2 < m 외 나머지는 배열에 바로 추가
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
  //[ 1, 2, 3, 3, 5, 6, 7, 9 ]
};

console.log(solution(array1, array2));
