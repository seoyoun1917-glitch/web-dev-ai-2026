// 1. 맞춰야 하는 랜덤 숫자 생성
function getTarget() {
  return Math.floor(Math.random() * 100) + 1;
}

// 2. 사용자 입력 받기
function setInput() {
  return prompt("1부터 100까지 숫자를 입력하세요");
}

// 3. 결과 판단
function judge(input, target) {
  if (input > target) {
    return "해당 숫자보다 작습니다";
  } else if (input < target) {
    return "해당 숫자보다 큽니다";
  } else {
    return "정답";
  }
}

// 4. 메시지 출력
function showMessage(message) {
  alert(message);
}

// 5. 게임 진행
function play() {
  const target = getTarget();
  let count = 0;

  while (true) {
    const inputValue = setInput();

    // 취소 버튼 클릭
    if (inputValue === null) {
      showMessage("게임을 종료합니다.");
      break;
    }

    // 숫자가 아닌 경우
    if (isNaN(inputValue) || inputValue === "") {
      showMessage("제대로 입력해주세요");
      continue;
    }

    const numberInput = Number(inputValue);
    count++;

    const result = judge(numberInput, target);

    if (result === "정답") {
      showMessage(`정답입니다! ${count}번 만에 맞추셨습니다`);
      break;
    } else {
      showMessage(result);
    }
  }
}

play();
