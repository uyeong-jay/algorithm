const array = [13, 5, 11, 7, 23, 15];

const solution = (arr) => {
  let answer = arr; 
  // 얕은 복사
  // answer나 arr 둘중하나라도 바뀌면 arr도 바뀐다.

  for (let i = 0; i < arr.length - 1; i++) { 
    let idx = i // 따로 idx를 만들어줘서 최대한 교체되는 횟수를 줄여준다.

    for (let j = i + 1; j < arr.length; j++) { 
      if (arr[idx] > arr[j]) idx = j; 
    }

    [arr[i], arr[idx]] = [arr[idx], arr[i]]; 
    // 교체(정렬)됨
    // 두번째 for문에서 idx에 j를 넣어줬기때문에 
    // 두번째 for문 안에서 교체 해주지 않고
    // 이렇게 두번째 for문이 끝난후 교체를 해 교체되는 횟수를 줄인다.
    
  }
  return answer;
}

console.log(solution(array));