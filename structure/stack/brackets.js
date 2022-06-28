//Stack(LIFO): Last In First Out
// - 세로로 세운 원통에 넣고 하나씩 뺀다고 생각하기
// - let stack = []; , stack.length , stack.push() , stack.pop()

//괄호의 짝을 지어주기 문제

const string = "(()))";

const solution = (str) => {
  let answer = "";
  let stack = []; //스택1

  for (let x of str) {
    if (x === "(") {
      stack.push(x); //스택2
    } else if (x === ")") {
      // '(' 가 남아 있지 않아 stack이 비어있는 경우
      if (stack.length === 0) {
        return "No";
      }
      stack.pop(x); //스택3
    } else {
      //예외처리
      console.log("error");
    }
  }
  // '(' 가 남은 경우
  if (stack.length > 0) {
    return "No";
  }

  return (answer = "Yes"); //No
};

console.log(solution(string));
