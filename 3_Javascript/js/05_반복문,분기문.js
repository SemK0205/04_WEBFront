
// 메뉴 주문하기
function check1() {

  // 메뉴 가격
  const gimbap = 3000;
  const ramen = 3500;
  const donkastu = 5000;

  // 주문 개수 카운트
  let gCount = 0;
  let rCount = 0;
  let dCount = 0;

  // prompt로 입력한 값을 저장할 변수 선언
  let input; // undefined

  // 비교연산자
  // == (값이 동일한 경우)
  // === (동일 비교 연산자 : 값, 자료형이 모두 같은 경우)

  // undefined == null (이 두개의 값은 동일하다고 인식함)
  // nudefined === null (자료형도 같은지 비교 undefined 자료형과 ouject가 같냐?)

  // === -> 값, 자료형이 모두 같은 경우 true
  // !== -> 값, 자료형이 모두 다른 경우 true

  while (input !== null) { // 취소 누르기 전까지 반복

    input = prompt("메뉴 번호를 입력하세요!");

    switch (input) {
      case "1": gCount++; break;
      case "2": rCount++; break;
      case "3": dCount++; break;
      case null: alert("주문 완료!"); break;
      default: alert("메뉴에 작성된 번호만 입력하세요");
    }

  }
  alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
  let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkastu);

  alert(`총 가격 : ${sum}원`);
}


// Up and Down 게임
function startGame() {

  // 맞춰야하는 난수(1~200) 발생시켜 저장
  const random = Math.floor(Math.random() * 200 + 1);


  let count = 0;

  let str = "1부터 200사이 숫자 입력";
  while (true) {

    let input = prompt(str);

    if (input == null) {

      alert("게임 포기");
      break;

    } else {

      const answer = Number(input);

      // 숫자가 아닌 문자열같이 잘못 입력한 경우
      // NaN (Not a Number : 숫자가 아니다)
      // isNaN(값) : 값이 NaN이면 true

      if (isNaN(answer)) {

        alert("숫자만 입력해 주세요");
        continue;

      } else {

        if (answer < 1 || answer > 200) {
          alert("1 ~ 200 사이 값만 작성해주세요");
          continue;
        } else {

          if (answer > random) {

            str = `${answer}(Down) 시도 횟수 : ${++count}`;

          } else if (answer == random) {

            alert(`정답 !!! (${random}) / 시도 횟수 : ${count}`);
            break;

          } else {

            str = `${answer}(Up) 시도 횟수 : ${++count}`;

          }
        }


      }


    }

  }


}