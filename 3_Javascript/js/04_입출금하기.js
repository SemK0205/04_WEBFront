// prompt 사용 연습

function test() {

  const password = prompt("비밀번호를 입력하세요");

  console.log(password);

  // 확인 -> 입력한 값이 문자열로 저장
  // 취소 -> null

  if(password == null) { // 취소

    alert("취소");

  } else { // 확인

    if(password == '1234') {
      alert("비밀번호 일치");
    } else{
      alert("비밀번호 불일치!");
    }

  }
}


//----------------------------------------------------------------------------

const output = document.getElementById("output"); // 잔액 출력 span
const amount = document.getElementById("amount"); // 금액 작성 input

let balance = 10000; // 잔액 기록 변수 (초기값 10000)
const pw = '1234'; // 비밀번호 저장 변수(비밀번호 1234)

output.innerText = balance;

// 입금 함수
function deposit() {

  if(amount.value.length == 0){
    alert("금액을 입력해 주세요")
  } else{
    balance += Number(amount.value);
    output.innerText = balance;
    amount.value = '';
  }

}

// 출금 함수
function withdrawal() {

  const password = prompt("비밀번호를 입력하세요");

  if(password == null) {

    alert("취소");

  } else {

    if(password == pw) {
      if(Number(amount.value) > balance){
        alert("출금 금액이 잔액보다 클 수 없습니다");
      } else{
        balance -= Number(amount.value);
        output.innerText = balance;
        //alert(amount.value+"원이 출금 되었습니다. 남은 잔액 : "+balance+"원");
        alert(`${amount.value}원이 출금되었습니다. 남은 잔액 : ${balance}원`)
        // 템플릿 리터럴
        // 백틱(``(== 물결표 쉬프트 안하고 누르기))을 사용하여 문자열을 감싸고,
        // ${} 안에 변수를 넣어 동적으로 문자열을 생성하는 방식 
        amount.value = '';
      }
      
    } else{
      alert("비밀번호가 일치하지 않습니다");
    }

  }

}