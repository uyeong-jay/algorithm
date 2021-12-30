//중복문자 제거하기

const string = "ksekkset";

function solution(str) {
  let answer = "";

  /* 첫번째 방법 */
  for (let item of str) {
    if (!answer.includes(item)) {
      answer += item;
    }
  }

  /* 두번째 방법 */
  // for (const x of str) {
  //   if (answer.indexOf(x) === -1) {
  //  // -1 이 for of의 한계를 없애줌 (for of는 값에 접근하는 애라서 인덱스로 문제 풀때는 방해가 되기떄문)
  //     answer += x;
  //   }
  // }

  /* 세번째 방법 */
  // for (let i = 0; i < str.length; i++) {
  //   // console.log(str[i], str.indexOf(str[i]), i);
  //   if (str.indexOf(str[i]) === i) {
  //     //중복되어 나오는 요소의 인덱스는 처음으로 나온 요소의 인덱스로 이미 정해져 있기 때문에 인덱스가 서로 일치 하지 않는다.
  //     //따라서 일치하는 인덱스만 추가 해준다.
  //     answer += str[i];
  //   }
  // }

  return answer;
}
console.log(solution(string)); //kset
