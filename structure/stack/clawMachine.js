//Stack(LIFO): Last In First Out
// - 세로로 세운 원통에 넣고 하나씩 뺀다고 생각하기
// - let stack = []; , stack.length , stack.push() , stack.pop()

//2차 배열: arr[][]
// - arr[인덱스][인덱스]
// - arr[행(줄)][열(칸)]
// - 행,열 중 어디를 고정하느냐에 따라 가로, 세로 탐색 방향이 바뀜

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

//- moves의 숫자에 맞는 세로줄 위치한 이중배열요소들을 세로로 하나씩 탐색
// - 0이면 건너뛰기, 0아니면 아래 진행
//  - 스택안 마지막에 위치한 요소가 스택에 넣는 요소와 같으면
//    - answer += 2 //팡터진 인형 갯수 센 것
//    - stack 마지막 요소 없애기
//  - 같지 않으면 그냥 스택 마지막 위치에 추가
//  - 해당 요소는 0으로 바꾸기

const solution = (board, moves) => {
  let answer = 0;
  let stack = [];
  let boardRow = board.length; //줄
  let movesColumn = moves.length; //칸

  for (let i = 0; i < movesColumn; i++) {
    for (let j = 0; j < boardRow; j++) {
      let doll = board[j][moves[i] - 1];
      if (doll !== 0) {
        if (stack[stack.length - 1] === doll) {
          answer += 2;
          stack?.pop();
        } else stack.push(doll);
        board[j][moves[i] - 1] = 0; //값을 바꿀때는 원본을 바꿔주기
        //doll = 0; //이렇게 참조한것을 바꾸면 원본은 안바뀜
        break; //인형은 해당 세로줄에서 한번만 뽑으니 2차 for문은 반복이 되지 않게 하기
      }
    }
  }
  return answer;
};

console.log(solution(board, moves));
