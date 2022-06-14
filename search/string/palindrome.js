//회문 문자열

const string = "Zooz";

function solution(str) {
  let answer = "";
  const lowerStr = str.toLowerCase();
  const reverseLowerStr = lowerStr.split("").reverse().join(""); //배열로 만들었다가 순서 뒤집은뒤 다시 문자열로 변환
  if (lowerStr === reverseLowerStr) return (answer = "YES");//일반 문자와 뒤집은 문자 서로 비교
  else return (answer = "NO");
}

console.log(solution(string));