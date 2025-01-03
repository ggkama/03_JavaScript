/** if 예제 - 양수인지 검사 */
function check1(){

    // id가 "input1"인 요소를 얻어와 in1 상수에 저장
    const in1 = document.getElementById("input1");

    // id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변화하여
    // val 상수에 저장
    const val = Number(in1.value);

    // 양수가 맞는지 검사
    if(val>0){
        //조건식이 true인 경우 수행할 코드;

        alert(`${val}은/는 양수입니다.`); 
        // alert : 브라우저 알림
        
    }


    //양수가 아닌 경우
    if(val<=0){

        alert(`${val}은/는 양수가 아닙니다.`);
    }
}

/** 1 ~ 100 사이의 난수를 발생 시켜 홀/짝 판별하기 */
function check2(){
    // 1~ 100 사이 난수 발생
    // 난수 발생 : Math.random() -> 0.0 <= 난수 < 1.0
    // 난수 발생 : Math.random() * 100 -> 0.0 * 100 <= 난수 * 100 < 1.0 * 100
    //                                -> 0.0 <= 난수 * 100 < 100.0

    // Math.random() *100+1 -> 1.0 <= 난수*100+1 < 101.0
    //소수점 내림처리 : Math.floor(실수);
    // Math.floor(Math.random() *100+1) -> 1 <= 난수 <101


    // 1~100 사이 난수를 발생시켜 randomNumber 변수에 저장
    const randomNumber = Math.floor(Math.random() *100+1);

    if(randomNumber % 2 === 1){
        alert(`${randomNumber}은/는 홀수입니다.`);

    }

    else {
        alert(`${randomNumber}은/는 짝수입니다.`);
    }
    
}


/** 양수, 음수, 0 판별기 */
function check3(){

    const input3 = document.getElementById("input3");
    const val = Number(input3.value);

    let result; //결과를 저장할 변수 (현재 undefined상태)


    //양수 판별
    if(val > 0 ){
        result = "양수";
    }

    //음수 판별
    else if(val < 0 ){
        result = "음수";
    }

    else {
        result = "0";
    }

    // if / else if / else에 모두 result 값 대입 코드 작성
    // -> 무조건 result에는 값이 대입되도록 되어있다. 
    alert(`${val}은/는 ${result} 입니다.`);

}

/** 어린이, 청소년, 성인 구분하기 */

function ageCheck(){

    const inputAge = document.getElementById("inputAge");
    const val = Number(inputAge.value);

    let result;
    


    // 어린이 판별
    if(( 0 < val ) && (13 > val) ){
        result = "어린이";
    }

    // 청소년 판별
    else if (( 13 < val ) && (20 > val) ){
        result = "청소년";
    }

    // 성인 판별
    else if (( 19 < val ) && (120 >= val) ){
        result = "성인";
    }

    // 잘못입력
    else {
        result = "잘못 입력 하셨습니다."
    }
    alert(result);
}


// 다른답
// ageCheck2

function ageCheck2(){
    const inputAge = document.getElementById("inputAge");
    const age = Number(inputAge.value); // 입력 받은 나이

    let result;
    // 잘못 입력된 경우 (먼저 넓은 범위부터 if로 제거)
    if(age < 0 || age > 120){
        result = "잘못 입력 하셨습니다.";
        // 0~120 까지 부분만 남음
    } else if(age <= 13) {
        //0이하는 이미 제거 <=13 까지만 범위 설정
        result = "어린이";
    } else if(age <= 19) {
        result = "청소년";
    } else (age >= 20) 
        result = "성인";
    
    alert(result);
}
    
    

