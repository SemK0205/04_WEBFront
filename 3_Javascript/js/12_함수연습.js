// 1.
function sayHellow(name) {
  console.log(`Hellow, ${name}!`);
}

sayHellow("성원");

// 2.
function sum(a, b) {
  return a+b;
}

console.log(sum(3,4));

// 3.
const times = (a, b) => a*b;

console.log(times(3,4));

// 4.
const max = (a, b) => {
  if(a>b) console.log("첫 번째 숫자가 더 큽니다.");
  else console.log("두 번째 숫자가 더 크거나 같습니다.");
};

max(3,4);

// 5.
const length = (str) => {
  console.log(str.length);
};

length("안녕하세요");

// 6.
const strs = (str, num) => {
  for(let i = 0; i < num; i++) console.log(str);
};

strs("안녕하세요",5);

// 7.
const isEven = num => {
  if(num % 2 == 0) console.log("true");
  else console.log("false");
};

isEven(121);

// 8.
const three = (a, b, c) => {
  if(a>b){
    if(a>c)return a;
    else return c;
  }else {
    if(b>c) return b;
    else return c;
  }
};

console.log(three(3,4,5));

// 9.
const list = (arr) => {
  console.log(arr[0]);
};
const arr = ["가", "나", "다"];

list(arr);

// 10.

const sumAvg = (arr) => {
  // let sum = 0;
  // for(let i = 0; i < arr.length; i++){
  //   sum += Number(arr[i]);
  // }
  // return [sum, sum/arr.length];
  let sum = arr.reduce((acc, curr) => { return acc + curr });
  // 배열.reduce(callback함수) : JS 배열의 매서드로(함수), 배열의 모든 요소를 순회하면서
  // 하나의 결과값을 누적하여 반환
  // acc (accumulator) : 이전 콜백 호출에서 반환된 값 (누산기 - 결과를 누적)
  // curr (currentValue) : 현재값 - 현재 처리중인 배열 요소 값

  let avg = sum / arr.length;

  return {"합계" : sum, "평균" : avg};
};

const arr2 = [4, 5, 6, 7, 8];

console.log(sumAvg(arr2));

// 11.
const cal = (a, b) => {
  return a + b;
};
function twoNum(cal) {
  return cal;
};
// const twoNum = (cal) =>{
//   return cal(3,4);
// };
console.log(twoNum(cal(3,4)));
  
// 12.
const nameHellowMap = () => {
  return console.log("안녕하신가?");
};

const nameHellow = (str, nameHellowMap) => {
  nameHellowMap;
  console.log(`나는 ${str}이라네`);
};

nameHellow("홍길동", nameHellowMap());
