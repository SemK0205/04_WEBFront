// 문자열.toLowerCase() : 영어를 모두 소문자로 변경 (A -> a)
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경 (a -> A)

// const keyboxq = document.querySelector(".key:first-child");
// const keyboxw = document.querySelector(".key:nth-child(2)");
// const keyboxe = document.querySelector(".key:nth-child(3)");
// const keyboxr = document.querySelector(".key:nth-child(4)");

// addEventListener("keydown", function (e) {
//   switch(e.key.toLowerCase()){
//     case 'q': keyboxq.style.backgroundColor = "red"; break;
//     case 'w': keyboxw.style.backgroundColor = "red"; break;
//     case 'e': keyboxe.style.backgroundColor = "red"; break;
//     case 'r': keyboxr.style.backgroundColor = "red"; break;
//   }
// });
// addEventListener("keyup", function (e) {
//   switch(e.key.toLowerCase()){
//     case 'q': keyboxq.style.backgroundColor = "white"; break;
//     case 'w': keyboxw.style.backgroundColor = "white"; break;
//     case 'e': keyboxe.style.backgroundColor = "white"; break;
//     case 'r': keyboxr.style.backgroundColor = "white"; break;
//   }
// });

// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 키보드 이벤트 핸들러 함수
function changeKeyColor(e, color) {
  // e : 이벤트 종류 객체
  // color : 배경색

  const keyMap = { 'q': 0, 'w': 1, 'e': 2, 'r': 3 };
  const idx = keyMap[e.key.toLowerCase()];
  if (idx != undefined) {
    keys[idx].style.backgroundColor = color;
  } else {
    return;
  }
}

// 키가 눌렸을 때 실행
addEventListener("keydown", (e) => changeKeyColor(e, 'yellow'));
addEventListener("keyup", (e) => changeKeyColor(e, 'white'));