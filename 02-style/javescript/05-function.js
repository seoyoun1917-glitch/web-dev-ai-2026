// 1. 매개 변수 X, 리턴 값 X
function 함수명() {
  console.log("안녕하세요!");
}
sayHello(); //함수 호출
sayHello();

// 2. 매개변수(=parameter) O, 리턴 값
// 기본 값이 없으면 undefined
function greet(name = "게스트") {
  console.log("${name}님, 안녕하세요!");
}
greet("김도연");
greet("김서연");
greet();

// 3. 매개 변수 X, 리턴 값 O
// return : 함수 호출 결과, 함수 종료
function getNumber() {
  return 1049;
}
console.log(getNumber());

// 4. 매개변수 O, 리턴 값 O
// 파라미터는 입력, 리턴은 출력
function add(a, b) {
  return a + b;
}
console.log(a, b);
console.log(add(30, 50));

// 변수의 유효번위 (Scope)
const num1 = 100;
// 외부에서 사용하는 변수 = 전역 변수
function sample1() {
  const num1 = 200;
  // 내부에서 사용하는 변수 = 지역 변수
  // 함수 밖에서 안쪽 변수는 접근 불가 즉, 전역 변수는 지역 변수가 접근이 가능하지만 지역 변수는 전역 변수를 접근 할 수 없다
  console.log("sample1 내부 ; + num1");
  // 정답 200
}
console.log("sample1 외부 ; + num1");
// 정답 100

// 선억적 vs 익명 vs 화살표 함수
// 선언적 함수(Function Declaration)
// 호이스팅 싱테 : 선언 이전에 호출이 가능한 상태
function multply(a, b) {
  return a * b;
}
console.log("선언적 함수 :", multply(3, 4));

// 익명 함수(Function Expression)
// 함수 이름이 없음. >> 변수에 할당
const subtract = function (a, b) {
  return a - b;
};
console.log("익명 함수 : ", subtract(5, 8));

// 화살표 함수 (Arrow Function)
// function 대신 => 사용 가능
const divide = (a, b) => {
  return a / b;
};
console.log("화살표 함수 :", divide(12, 3));

// 콜백 함수
// 다른 함수의 파라미터로 전달되는 함수
function callFunc(callback) {
  console.log("함수 호출 전!");
  callback(); // 콜백 함수 호출!
  console.log("함수 호출 후!");
}
function call() {
  console.log("안녕하세요~ 이건 콜백 함수 호출!");
}
callFunc(call);
