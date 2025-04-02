const span = document.querySelector("#resName");

document.querySelector("#resName").addEventListener("click", () => {
  const input = document.querySelector(".res-name-hidden");
  span.classList.add("res-name-hidden");
  input.classList.remove("res-name-hidden");
});

document.querySelector("#resNameInput").addEventListener("blur", () => {
  const input = document.querySelector("#resNameInput");
  input.classList.add("res-name-hidden");
  span.classList.remove("res-name-hidden");
  span.innerText = `${input.value}`;
  console.log(span.textContent)
});

const btnP1 = document.querySelector(".normal-container");
const btnP2 = document.querySelector(".edit-container");


document.querySelector(".btn-container").addEventListener("click", () => {
  btnP1.classList.add("b-hidden");
  btnP2.classList.remove("b-hidden");
  const spanName = document.querySelectorAll(".menu-name");
  const spanPrice = document.querySelectorAll(".menu-price");
  const menu = document.querySelector(".menu");
  
  
  for(let i = 0; i < spanName.length ; i++){
    const inputCheck = document.createElement("input");
    const menuContainer = document.querySelector(".menu-container");
    const menuList = document.querySelectorAll(".menu");
    inputCheck.type = "checkbox";

    const inputName = document.createElement("input");
    inputName.type = "text";
  
    inputName.classList.add("menu-name-input");

    inputName.value = spanName[i].textContent;

    const inputPrice = document.createElement("input");
    inputPrice.type = "text";
    inputPrice.classList.add("menu-price-input");
    inputPrice.value = spanPrice[i].textContent;

    menuList[i].append(inputCheck);
    menuList[i].append(inputName);
    menuList[i].append(inputPrice);
    
    spanPrice[i].remove();
    spanName[i].remove();
  }
  
});


document.querySelector("#addMenu").addEventListener("click", () => {
  
  const inputCheck = document.createElement("input");
  const menuContainer = document.querySelector(".menu-container");
  inputCheck.type = "checkbox";
  inputCheck.classList.add("check");

  const menuMain = document.createElement("li");
  menuMain.classList.add("menu");

  menuContainer.append(menuMain);

  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.setAttribute("placeholder", "메뉴명");
  inputName.classList.add("menu-name-input");

  const inputPrice = document.createElement("input");
  inputPrice.type = "text";
  inputPrice.classList.add("menu-price-input");
  inputPrice.setAttribute("placeholder", "가격");

  menuMain.append(inputCheck);
  menuMain.append(inputName);
  menuMain.append(inputPrice);

});

document.querySelector("#deleteMenu").addEventListener("click", () => {
  const checkedbox = document.querySelectorAll(".check");
  for(let i =0; i<checkedbox.length; i++){
    if(checkedbox[i].checked){
      checkedbox[i].parentElement.remove();
    }
  }
});

document.querySelector("#exitBtn").addEventListener("click", () => {
  btnP1.classList.remove("b-hidden");
  btnP2.classList.add("b-hidden");
  
  const inputName = document.querySelectorAll(".menu-name-input");
  const inputPrice = document.querySelectorAll(".menu-price-input");
  const menu = document.querySelector(".menu");
  const checkedbox = document.querySelectorAll(".check");
  
  
  for(let i = 0; i < inputName.length ; i++){
    const menuList = document.querySelectorAll(".menu");
    
    const spanName = document.createElement("span");
    
    
    
    
    if(inputName[i].value.length == 0){
      spanName.innerText = "미입력";
    }else {
      spanName.classList.add("menu-name");
      spanName.innerText = inputName[i].value;
      
    }
    const spanPrice = document.createElement("span");
    
    
    if(inputPrice[i].value.length == 0){
      spanPrice.innerText = "0원";
    }else{
      spanPrice.innerText = inputPrice[i].value;
      spanPrice.classList.add("menu-price");

    }

    menuList[i].append(spanName);
    menuList[i].append(spanPrice);
    
    checkedbox[i].parentElement.remove();
  }


});