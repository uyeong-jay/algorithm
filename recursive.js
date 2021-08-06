const solution = (n) => {
  let answer = '';
  const DFS = (L) => {
    if (L === 0) return;
    else {
      DFS(L - 1);
      answer += L;
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(3));