const box0 = document.getElementById("box0");
const roulette0 = document.getElementById("roulette0");
const box1 = document.getElementById("box1");
const roulette1 = document.getElementById("roulette1");
const box2 = document.getElementById("box2");
const roulette2 = document.getElementById("roulette2");
const box3 = document.getElementById("box3");
const roulette3 = document.getElementById("roulette3");

const diceSE = new Audio("./sounds/dice.mp3");
const showResult0 = (show) =>{
  box0.textContent = show;
};
const showResult1 = (show) =>{
  box1.textContent = show;
};
const showResult2 = (show) =>{
  box2.textContent = show;
};
const showResult3 = (show) =>{
  box3.textContent = show;
};

roulette0.addEventListener('click', ()=>{
  diceSE.play();
  const result = Math.floor(Math.random()*100)+1;
  showResult0(result);
});
roulette1.addEventListener('click', ()=>{
  diceSE.play();
  const result = Math.floor(Math.random()*6)+1;
  showResult1(result);
});
roulette2.addEventListener('click', ()=>{
  diceSE.play();
  const result = Math.floor(Math.random()*11)+2;
  showResult2(result);
});
roulette3.addEventListener('click', ()=>{
  diceSE.play();
  const result = Math.floor(Math.random()*16)+3;
  showResult3(result);
});