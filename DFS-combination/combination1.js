//조합(combination)

const solution = (n, m) => {
  let answer = [];
  let tmp = Array.from({length: m}, ()=>0);

  const DFS = (L, S) => {//L: level, S: start number
    if(L === m) {//종착점
      answer.push(tmp.slice());
    } else {//뻗어 나가는 과정
      for(let i=S; i<=n; i++) {
        tmp[L] = i;
        DFS(L+1, S+1);
      }
    }
  }

  DFS(0, 1);
    //   0 :level(맨윗단계)
    //   1 :start number

  return answer;
}

console.log(solution(4, 2));
