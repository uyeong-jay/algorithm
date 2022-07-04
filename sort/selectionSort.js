//선택정렬: 배열 요소중 최소값을 두번째 반복문을 통해 골라내어(선택하여) 마지막에 자리를 교체해주며 정렬해주는 방법

//배열안 요소들을 정렬해보기
// - 정렬 메소드 배열.sort()를 써도 되지만
// - 왜 정렬이 되는지 그 안에서 이루어지는 정렬이 되는 과정을 배워보는 정렬 알고리즘 문제

const array = [13, 5, 11, 7, 23, 15];

const solution = (arr) => {
  let answer = arr; //let answer = [...arr];
  // 얕은 복사 - answer나 arr 둘중하나라도 바뀌면 둘다 바뀐다.

  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    // 인덱스 저장
    // 밑의 두번째 for문을 돌고 다시 여기로 올때마다 idx은 새로 선언,초기화 됨

    //최소값이 들어있는 인덱스를  idx에 저장
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }

    [arr[i], arr[idx]] = [arr[idx], arr[i]];
    //arr[i]: 현재 인덱스를 넣은 요소
    //arr[idx]: 최소값을 가리키는 인덱스를 넣은 요소
    //두개 순서 바꾸기(정렬 하기)
    // 교체(정렬)됨
    // 두번째 for문 안에서 바로 교체 해주지 않고
    // 이렇게 두번째 for문이 끝난후 첫번쨰 for문 마지막에 교체를 해 교체되는 횟수를 줄인다.
  }
  return answer;
};

console.log(solution(array));
