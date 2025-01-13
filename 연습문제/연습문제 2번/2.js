const numberli = document.getElementsByClassName("number");
const result = document.getElementById("result");
const reset = document.getElementById("reset"); // 초기화

for(let number of numberli){
    number.addEventListener("click", e=>{

        if(result.innerText.length < 10){
            result.innerText += result;e.target.innerText; // --> innerText(); -> innerText;로 수정
        } else {
            alert("숫자 10개까지만 입력가능")
        }
    
    });
    
    // 2.js:9 Uncaught TypeError: e.target.innerText is not a function
    // at HTMLDivElement.<anonymous> (2.js:9:42)

    // 오류 메시지 Uncaught TypeError:
    //  e.target.innerText is not a function은 
    //  innerText를 함수처럼 호출했기 때문입니다. 
    //  innerText는 함수가 아니라 속성이므로, 
    // 함수 호출 () 없이 접근해야 합니다.
    };

    reset.addEventListener("click", ()=>{
        result.innerText="";
    });
