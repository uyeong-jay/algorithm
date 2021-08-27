//조합들의 합(sum of combinations)

const solution = (n, r) => {
  let answer;
  const DFS = (n, r) => {
    if(n === r || r === 0) return 1;
    else { 
      return DFS(n-1, r-1) + DFS(n-1, r);
    }
  }

  answer = DFS(n, r);

  return answer;
}

console.log(solution(5, 3));