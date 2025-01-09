// 준비한 이미지 파일명을 배열에 저장
const images =["dog1.jpg","dog2.jpg","dog3.jpg","dog4.jpg","dog5.jpg"]



// 클래스가 key인 요소를 모두 얻어와 keys 변수에 저장
const keys = document.querySelectorAll(".key");
// 입력키 : Q W E R
// 인덱스 : 0 1 2 3
// 이미지 : 0 1 2 3 

// * HTML문서 자체에 keydown 이벤트 리스너(감지기) 추가
document.addEventListener("keydown", function(e){
    // console.log(e.key)


    // 문자열.toUpperCase() : 대문자로 변환
    // 문자열.toLowerCase() : 소문자로 변환
    
    let index; // 인덱스를 저장할 변수
    switch(e.key.toLowerCase()){
        case "q" : index = 0; break;
        case "w" : index = 1; break;
        case "e" : index = 2; break;
        case "r" : index = 3; break;
        default : return; //다른키 입력시 함수(이벤트핸들러) 종료

    }
    
    //눌러진 키의 배경 이미지를 변경
    
    keys[index].style.backgroundImage = `url('../images/${images[index]}')`
    
    
    
});


/* key를 뗏을 떄 배경 이미지 지우기 */
document.addEventListener("keyup", function(e){
    
    let index; // 인덱스를 저장할 변수
    switch(e.key.toLowerCase()){
        case "q" : index = 0; break;
        case "w" : index = 1; break;
        case "e" : index = 2; break;
        case "r" : index = 3; break;
        default : return; //다른키 입력시 함수(이벤트핸들러) 종료
    
    }

    keys[index].style.backgroundImage = "none"
});


/* 마우스 따라다니는 이미지 */
const cursorImage = document.querySelector("#cursorImage");

/* 문서 자체에 마우스가 움직였을때 (mousemove) */
document.addEventListener("mousemove", function(e){

    // console.log(e)
    cursorImage.style.left = `${e.pageX  + 0}px`
    cursorImage.style.top = `${e.pageY + 0}px`
});