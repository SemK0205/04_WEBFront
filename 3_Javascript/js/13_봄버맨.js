let strUD = 0;
let strRL = 0;

document.addEventListener("keydown", function(e){
  
  const bomberman = document.querySelector("#bomberman");
  
  console.log(e);
  switch(e.key){
    case 'ArrowDown' :strRL += 0 ,strUD += 5, translate(strUD,strRL); break;
    case 'ArrowRight' : strRL += 5, strUD += 0 , translate(strUD,strRL); break;
    case 'ArrowUp' : strUD -= 5 , translate(strUD,strRL); break;
    case 'ArrowLeft' : strRL -= 5 , translate(strUD,strRL); break;
    case 'x' : box.innerHTML += `<img class='bomm' src='/images/bomb.png' 
            style='position : absolute;
            transform : translate(${strRL}px, ${strUD}px);'>`;
            console.log(strRL); break;
    case 'z' : document.querySelectorAll(".bomm").src="src='/images/boomm.png'";
    default: return;
  }
  
} );

function translate(strUD, strRL){
  bomberman.style.transform = `translate(${strRL}px, ${strUD}px)`;
}

