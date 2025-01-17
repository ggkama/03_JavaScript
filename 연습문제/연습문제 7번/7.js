
const createBtn = document.querySelector("#createBtn");
const resetBtn = document.querySelector("#resetBtn");
const randomBtn = document.querySelector("#randomBtn");
const btnContainer = document.querySelector(".btn-container");
const lottoBoard = document.querySelector("#lottoBoard");


createBtn.addEventListener("click", () => {


  lottoBoard.innerHTML = "";

 
  for(let i=1 ; i<=45 ; i++){
    const number = document.createElement("div");
    number.classList.add("number"); // 클래스 추가
    number.textContent = i;

    // div.number에 클릭 시 동작 추가
    number.addEventListener("click", e => {
     


      const count = document.querySelectorAll(".active").length;

      if(count <= 5 || e.target.classList.contains("active")){
        e.target.classList.toggle("active");
      }
      else{
        alert("6개까지 선택가능");
      }
    });

    lottoBoard.append(number); // 화면에 추가

    btnContainer.classList.remove("hidden");
    createBtn.classList.add("hidden");
  }
});


// 선택 초기화 함수
function resetFn(){
  const actives = document.querySelectorAll(".active");
  actives.forEach(item => item.classList.remove("active"));
}

// 랜덤 선택함수
function randomSelectFn(){
  // 중복 X 난수 6개 생성
  const set = new Set(); // 중복 값을 저장하지 않는 객체
  while(set.size < 6){ // 저장된 숫자가 6개 미만이면 반복
    const ran = Math.floor(Math.random() * 45 + 1);
    set.add(ran);
  }

  const numbers = document.querySelectorAll(".number");

  set.forEach(num => {
    numbers[num-1].classList.add("active");
  });
  
}

// 초기화 버튼 클릭 시
resetBtn.addEventListener("click", resetFn);

// 랜덤 버튼 클릭 시
randomBtn.addEventListener("click", () => {
  randomBtn.disabled = true; // 클릭 못하게 비활성화

  let currentInterval = setInterval(()=>{
    resetFn(); // 기존 선택 초기화
    randomSelectFn(); // 랜덤 선택
  }, 100);
  
  
  const ran = Math.floor(Math.random() * 6 + 5);
  setTimeout(()=>{
    clearInterval(currentInterval);
    randomBtn.disabled = false;
  }, ran * 200);

  
});

