// 순열

const solution = (n, m) => {
  let answer = [];
  let tmp = Array.from({length: m}, ()=>0);

  const DFS = (L) => {
    if(L === m) { //L: 인덱스수, m: 배열 길이
      answer.push(tmp.slice());//새로운 배열로 반환해준뒤 push
    } else {
      for (let i=1; i<=n; i++) { //가지 3개
        tmp[L] = i; //원본이 바뀜
        DFS(L+1);
      } 
    }
  }
  DFS(0);//인덱스 수를 넣음

  return answer;
}
console.log(solution(3, 2));// 숫자 3개 / 2자리 순열만들기