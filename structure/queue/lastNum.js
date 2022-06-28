// queue(FIFO): First In First Out
// - 양쪽이 뚫린 원통을 가로로 놓고 한쪽으로 넣은후 다른 한쪽으로 뺀다고 생각하기
// - let queue = []; , queue.length , queue.push()(queue.shift())
// - queue.push()(queue.shift()): shift() 실행후 push() 실행됨

//마지막 까지 남는 숫자 구하기

const solution = (n, k) => {
  let answer;
  //1씩 차이 나는 요소들이 담긴 배열 생성
  let queue = Array(n)
    .fill()
    .map((v, i) => i + 1); //큐1
  //let queue = Array.from({ length: n }, (v, i) => i + 1); //이렇게도 배열 생성가능

  //false가 나올때 까지 반복하기 위해 while문을 사용함
  while (queue.length) {
    //1,2 번째는 빼낸후 다시 넣기
    for (let i = 0; i < k - 1; i++) queue.push(queue.shift()); //큐2
    //3번쨰는 뺴내기만 하기
    queue.shift(); //하나씩 없애면 결국엔 while조건이 false가 됨
    if (queue.length === 1) {
      //마지막 하나 남았을때는
      answer = queue.shift(); //하나를 마저 지우고 지운것을 answer에 넣기
    }
  }

  return answer; //7
};

console.log(solution(8, 3));
