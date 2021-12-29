//요소의 합이 100되는 길이가 7인 숫자 배열 출력

const array = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0); //배열 요소 누적 합계(reduce(), reduceRight())
  
  //조건에 맞지않는 두 요소 구하기
  for (let i = 0; i < arr.length - 1; i++) { //첫번째 요소의 인덱스 루프 생성
    for (let j = i + 1; j < arr.length; j++) { //두번째 요소의 인덱스 루프 생성
      if ((sum - (arr[i] + arr[j])) === 100) {
        arr.splice(j, 1); 
        arr.splice(i, 1);
        // 항상 배열을 여러번 지울땐 뒤에서 부터 지우기 (j >> i)
      }
    }
  }

  return answer;
}

console.log(solution(array)); //[20, 7, 23, 19, 10, 8, 13]