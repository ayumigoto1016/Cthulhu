const box = document.getElementById("box");
const roulette = document.getElementById("roulette");

const showResult = (show) =>{
  box.textContent = show;
};

roulette.addEventListener('click', ()=>{
  const result = Math.floor(Math.random()*10)+1;
  showResult(result);
});
