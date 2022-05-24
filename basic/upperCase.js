//대문자 갯수 세기

const string = "KimchiIsKoreanFood";

function solution(str) {
  let answer = 0;
  for (let x of str) { //배열 요소 루프 생성
    let num = x.charCodeAt() // 아스키코드 넘버로 저장( or toUpperCase())
    if (65 <= num && num <= 90) { //대문자만
      // A~Z: 범위 나누기
      // A~Z(대문자): 65 ~ 90
      // a~b(소문자): 97 ~ 122
      answer++;
    }
  }
  return answer;
}

console.log(solution(string)); //4