const inputList = document.querySelectorAll(".color-input");
const boxList = document.querySelectorAll(".box");
const btn = document.querySelector("#changeButton");
btn.addEventListener("click", function() {
  for(let i = 0; i < boxList.length ; i++)boxList[i].style.backgroundColor = inputList[i].value;
});

