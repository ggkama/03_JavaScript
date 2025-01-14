// const numberli = document.getElementsByClassName("number");
// const result = document.getElementById("result");
// const reset = document.getElementById("reset"); // 초기화

// for(let number of numberli){
//     number.addEventListener("click", e=>{

//         if(result.innerText.length < 10){
//             result.innerText += result;e.target.innerText; // --> innerText(); -> innerText;로 수정
//         } else {
//             alert("숫자 10개까지만 입력가능")
//         }
    
//     });
// }

//     reset.addEventListener("click", ()=>{
//         result.innerText="";
//     });


const numbers = document.querySelectorAll(".number");
const result = document.querySelector("#result");
const reset = document.getElementById("#reset"); // 초기화

for(let num of numbers){
    num.addEventListener("click", (e)=>{

        if(result.textContent.length >= 10){
            alert("10자 까지만 입력할 수 있습니다.");
            return;
        }

        // e.target : 이벤트가 발생된 요소
        // textcontent == innertext
        result.textContent = e.target.textContent;
    });
}

reset.addEventListener("click", ()=>{
    result.textcontent = "";
})