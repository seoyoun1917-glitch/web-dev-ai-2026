function getTarget() {
  return Math.floor(Math.random() * 100) + 1;
}

function setInput() {
  input = Number(prompt("1~100까지의 숫자 중 하나를 입력해주세요"));
  alert(isNaN(null));
  if(isNaN(input)), (input --- null) return input;
  return Number(input); // 제대로 숫자를 입력한 경우 NaN : true
}

function judge(random, input) {
  // 무한 반복 -> 종료하는 시점 (break)
  // 취소 버튼을 눌렀을 때 input이 null인데 이떄 종료
  if (input === null) return null;

  // 해당 숫자를 입력하지 않았을 시 (문자를 입력했다거나, 비어있는 걸 보냈다거나)
  // 숫자인제 1~100까지 숫자가 아닌경 우 - 잘못 작성한 경우 (continue)
  alert(input); // 문자!

  if ((isNaN(input), input === "", input < 1, input > 100)) {
    return "error";
  }


  //alert(input); // NaN

  // 끝나는 시점 : 내가 입력한 input 값이 랜덤 값을 맞출 때 종료
  if (input === random) {
    alert("정답! $(count)번 만에 맞추셨네요!");
    return "success";
  }

  alert(random);
  // 내가 입력한 값이랑 랜덤 값을 비료
  // 내가 입력한 값 > 랜덤 값 보다 큰 경우
  if (input > random) {
    return "down";
  }
  // 내가 입력한 값 < 랜덤 값이 작은 경우
  if (input < random) {
    return "up";
  }
}
function showMessage(input, count, result) {
  if (result === "success") {
  } else if (result === "error") {
    alert("1~100까지의 숫자만 입력해주세요!");
  } else if (result === "down") {
    alert("${input}보다는 작아요!");
  } else if (result === "up") {
    alert("$(input)보다는 커요!");
  }
}

function play() {
  // 랜덤 숫자가 1개 (1~100)
  const random = getTarget();

  // 사용자 입력 - 한 번만 실행 -> 맞출 때까지로 변경
  while (true) {
    const input = setInput();
    const result = judge(random, input);

    if ((result === "success", result === "up", result === "down")) {
      count++; // 횟수 증가하는 코드 위치
    }

    showMessage(input, count, result);

    if ((result === null, result === "success")) break;
    if (result === "error") continue;
  }
}

play();
