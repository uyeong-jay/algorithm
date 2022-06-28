//Hash Map 활용
//Anagram: Anagram 이란 단어나 문장의 순서를 바꾸어 다른 단어나 문장을 만드는 것을 뜻 함

// new Map()
//  (요소 = key)
//  (값 = value)
// .set(key, value): key값 과 value값 정하기
// .has(key): 해당 key에 대한 value이 있는지 여부에 따라 boolean값 리턴
// .get(key): 해당 key의 value값을 리턴

//문자열 갯수는 일치하다는 전제하에 비교.
const string1 = "AbaAeCe"; // abaCC , AbaAeCe
const string2 = "baeeACA"; // Caaab , baeeACA

const solution = (str1, str2) => {
  let answer = "Yes";

  let sH = new Map(); // Map을 sH에 저장(sH: 해쉬)
  for (x1 of str1) {
    if (!sH.has(x1)) {
      // 해당요소(x1)가 처음 나왔을때
      console.log("str1", sH.has(x1)); //false
      sH.set(x1, 1); //key는 요소, value는 갯수 로 정함
    } else {
      // 해당요소(x1)가 또 나왔을때
      console.log("str1", sH.has(x1)); //true
      sH.set(x1, sH.get(x1) + 1); //key는 요소, value는 갯수 로 정함
    }
    // sH에 key에 대한 value값이 정해진 상태
    console.log("str1", sH);
    //str1: Map(5) { 'A' => 2, 'b' => 1, 'a' => 1, 'e' => 2, 'C' => 1 }
  }
  for (x2 of str2) {
    //여기서 사용하는 sH는 여전히 위에서 이미 세팅 된 sH 이다.
    //세팅된 sH: Map(5) { 'A' => 2, 'b' => 1, 'a' => 1, 'e' => 2, 'C' => 1 }
    if (!sH.has(x2) || sH.get(x2) === 0) {
      //세팅된 sH에 요소(x2)가 없을때 >> true
      //세팅된 sH에 요소(x2)의 value(갯수)가 부족할때(=== 0) >> true
      //str1 과 str2 의 요소의 갯수가 똑같다는 전제하에 비교하기 때문에 str1의 요소가 부족한게 아닌 많은 것은 계속 비교시 !sH.has(x2) 여기서 false가 나오기 때문에 고려 하지 않아도 됨
      return "No";
    }
    sH.set(x2, sH.get(x2) - 1);
    //세팅된 sH 요소(x2)의 value(갯수)에서 하나 빼기
    console.log("str2", sH);
    //str2: Map(5) { 'A' => 0, 'b' => 0, 'a' => 0, 'e' => 0, 'C' => 0 }
    //이렇게 모두 0개가 나오면 Yes로 출력됨
  }

  return answer; //Yes
};

console.log(solution(string1, string2));
