//조합들의 합(sum of combinations) + 메모이제이션(memoization)

const solution = (n, r) => {
  let answer;
  let memo = Array.from({length: n+1}, ()=>Array.from({length: n+1}, ()=>0));

  const DFS = (n, r) => {
    if(memo[n][r] > 0) return memo[n][r];
    if(n === r || r === 0) return 1;
    else { 
      return memo[n][r] = DFS(n-1, r-1) + DFS(n-1, r);
    }
  }

  answer = DFS(n, r);

  return answer;
}

console.log(solution(33, 13));