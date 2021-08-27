// 이진트리, 부분집합

const solution = (n) => {
  let answer = [];
  let cb = Array.from({length: n}, () => 0); 
  // cb(check box)
  // cd : [0, 0, 0] 

  const DFS = (v) => {
    if (v-1 === n) {// 결과만을 출력하는 곳
      // n : 체크박스의 인덱스+1 (=체크박스의 길이)
      // v-1 : 체크박스의 인덱스 (인수로 받은 숫자를 인덱스로 바꿔 활용한 것)
      // 체크박스의 인덱스를 넘어서면(= v-1이 n이 되면)
      // 갈래로 이동하지 않고(= else로 이동하지 않고) 여기서 결과를 출력

      let tmp = ''; // tmp 잠시 만들어 놓는 변수
      for (let i = 0; i < n; i++) {
        if(cb[i] === 1) tmp += i + 1 + ' ';
      }

      if(tmp.length > 0) answer.push(tmp.trim());
      
    } else {//하나의 갈래로 이동하는 곳

      //전위

      cb[v-1] = 1; // 부분집합에 포함
      DFS(v+1); //재귀

      cb[v-1] = 0; // 부분집합에 미포함
      DFS(v+1); //재귀

    }
  }

  DFS(1);

  return answer;
}

console.log(solution(3)); // [ '1 2 3', '1 2', '1 3', '1', '2 3', '2', '3' ]