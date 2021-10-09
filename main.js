const box0 = document.getElementById("box0");
const roulette0 = document.getElementById("roulette0");
const box1_1 = document.getElementById("box1_1");
const roulette1_1 = document.getElementById("roulette1_1");
const box1_2 = document.getElementById("box1_2");
const roulette1_2 = document.getElementById("roulette1_2");
const box1_3 = document.getElementById("box1_3");
const roulette1_3 = document.getElementById("roulette1_3");
const box1_4 = document.getElementById("box1_4");
const roulette1_4 = document.getElementById("roulette1_4");
const box1_5 = document.getElementById("box1_5");
const roulette1_5 = document.getElementById("roulette1_5");
const box1_6 = document.getElementById("box1_6");
const roulette1_6 = document.getElementById("roulette1_6");
const box1_7 = document.getElementById("box1_7");
const roulette1_7 = document.getElementById("roulette1_7");
const box1_8 = document.getElementById("box1_8");
const roulette1_8 = document.getElementById("roulette1_8");
const box2 = document.getElementById("box2");
const roulette2 = document.getElementById("roulette2");
const box3 = document.getElementById("box3");
const roulette3 = document.getElementById("roulette3");

const diceSE = new Audio("./sounds/dice.mp3");
const showResult0 = (show) =>{
  box0.textContent = show;
};
const showResult1_1 = (show) =>{
  box1_1.textContent = show;
};
const showResult1_2 = (show) =>{
  box1_2.textContent = show;
};
const showResult1_3 = (show) =>{
  box1_3.textContent = show;
};
const showResult1_4 = (show) =>{
  box1_4.textContent = show;
};
const showResult1_5 = (show) =>{
  box1_5.textContent = show;
};
const showResult1_6 = (show) =>{
  box1_6.textContent = show;
};
const showResult1_7 = (show) =>{
  box1_7.textContent = show;
};
const showResult1_8 = (show) =>{
  box1_8.textContent = show;
};
const showResult2 = (show) =>{
  box2.textContent = show;
};
const showResult3 = (show) =>{
  box3.textContent = show;
};

roulette0.addEventListener('click', ()=>{
  diceSE.currentTime = 0;
  diceSE.play();
  const result = Math.floor(Math.random()*100)+1;
  showResult0(result);
});
roulette1_1.addEventListener('click', ()=>{
  diceSE.currentTime = 0;  
  diceSE.play();
  const result = Math.floor(Math.random()*2)+1;
  showResult1_1(result);
});
roulette1_2.addEventListener('click', ()=>{
  diceSE.currentTime = 0;  
  diceSE.play();
  const result = Math.floor(Math.random()*3)+1;
  showResult1_2(result);
});
roulette1_3.addEventListener('click', ()=>{
  diceSE.currentTime = 0;  
  diceSE.play();
  const result = Math.floor(Math.random()*4)+1;
  showResult1_3(result);
});
roulette1_4.addEventListener('click', ()=>{
  diceSE.currentTime = 0;  
  diceSE.play();
  const result = Math.floor(Math.random()*6)+1;
  showResult1_4(result);
});
roulette1_5.addEventListener('click', ()=>{
  diceSE.currentTime = 0;  
  diceSE.play();
  const result = Math.floor(Math.random()*8)+1;
  showResult1_5(result);
});
roulette1_6.addEventListener('click', ()=>{
  diceSE.currentTime = 0;  
  diceSE.play();
  const result = Math.floor(Math.random()*10)+1;
  showResult1_6(result);
});
roulette1_7.addEventListener('click', ()=>{
  diceSE.currentTime = 0;  
  diceSE.play();
  const result = Math.floor(Math.random()*12)+1;
  showResult1_7(result);
});
roulette1_8.addEventListener('click', ()=>{
  diceSE.currentTime = 0;  
  diceSE.play();
  const result = Math.floor(Math.random()*20)+1;
  showResult1_8(result);
});
roulette2.addEventListener('click', ()=>{
  diceSE.currentTime = 0;  
  diceSE.play();
  const result = Math.floor(Math.random()*12)+1;
  showResult2(result);
});
roulette3.addEventListener('click', ()=>{
  diceSE.currentTime = 0;  
  diceSE.play();
  const result = Math.floor(Math.random()*18)+1;
  showResult3(result);
});