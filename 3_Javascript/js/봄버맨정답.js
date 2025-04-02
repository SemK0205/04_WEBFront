let xIndex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yIndex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

document.addEventListener("keydown", function(e) {

  const bomberman = document.querySelector("#bomberman");

  console.log(e.key);

  switch(e.key){
    case 'ArrowRight' : xIndex +=10; break;
    
    case 'ArrowLeft' : xIndex -=10; break;
    
    case 'ArrowUp' : yIndex -=10; break;
    
    case 'ArrowDown' : yIndex +=10; break;
    
    case 'x' : 
    const box = document.querySelector("#box");
    box.innerHTML += `<img src="/images/bomb.png" class="bomb"
                      style = "transform: translate(${xIndex}px, ${yIndex}px);
                      position: absolute">`;

    break;
    
    case 'z' : explodeBomb(); break;
    
    default : alert("방향키, z, x 만 가능");
  }

  bomberman.style.transform = `translate(${xIndex}px, ${yIndex}px)`;

});

const explodeBomb = () => {
  const bombs = document.querySelectorAll(".bomb");
  // bombs 유사배열 형태

  // for .. of 문 : 배열같은 반복 가능한 객체의 요소를 순차적으로 순회하는 반복문
  for(let bomb of bombs) {
    bomb.src = "/images/boomm.png";
  }

}