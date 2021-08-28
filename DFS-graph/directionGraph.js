//방향 그래프 - 인접행렬

//배열로 나타낸 방향 그래프
const array = [ [1, 2], [1, 3] [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5] ];


const solution = (n ,arr) => {
  let answer = 0;
  let graph = Array.from({length: n+1}, ()=> Array.from({length: n+1}, ()=> 0));
  let cb = Array.from({length: n+1});//check box

  for(let [a, b] of arr) {
    graph[a][b] = 1; 
    //a > b 로 가는 방향 그래프
    //그래프안 해당방향칸에 1을 넣어서 인접행렬을 만듦
  }

  const DFS = (v) => {
    if(v === n) { //종착점
      //v: 현노드, n: 마지막단계 노드
      answer++;

    } else { //뻗어 나가는 곳
      for(let i=1; i<=n; i++) {//node 1 부터 마지막 node 5 까지 5가지 엣지 뻗기
        if(graph[v][i] === 1 && cb[i] === 0) {
          //v: 현node, i: 1~5node 

          cb[i] = 1;
          DFS(i);

          cb[i] = 0;
          //cb를 0으로 돌려 놓고 나오기
          //돌려 놓지 않으면 해당 node에는 더이상 접근을 못하기 때문에

        }
      }
    }

  }
  cb[1]=1; 
  // check box를 0,1로 채움(0: 노체크, 1:체크)
  // 탐색시 체크 된곳은 다시 돌아오지 못하게 cb를 활용

  DFS(1); 
  // 1: 첫번째로 뻗어 나갈 node숫자(연결점)

  return answer;
}

console.log(solution(5, array));