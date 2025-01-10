/* 전달 인자, 매개 변수 확인 */
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");


/** 전달 받은 값이 양수/음수/0인지 판별해서 출력 
 * @param num : 전달받은 숫자
*/
function testFn1(num){
    let str = "";

    if(num === 0){
        str = 0;
    } else if(num > 0){
        str = "양수";
    } else {
        str = "음수";
    }

    alert(`${num}은/는 ${str}입니다.`);
}
btn1.addEventListener("click", function(){
    // #input1인 요소에 작성된 값을 얻어와 number 타입으로 변환
    const val = Number(input1.value);
    
    //함수 호출
    testFn1(val);
    
});


/** 전달 받은 배열 내 요소의 합 출력하기 
 * @param arr : number만 저장된 1차열 배열
*/
const btn2 = document.querySelector("#btn2"); // id 선택 시 # 필수
function sumArr(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num; // 입력 값을 모두 더함
    }
    alert(`합계 : ${sum}`); // 결과 표시
}

btn2.addEventListener("click", function () {
    const inputs = document.querySelectorAll("[name=input2]"); // 공백 제거
    const arr = [];
    
    for (let input of inputs) {
        arr.push(Number(input.value)); // 입력값을 숫자로 변환하여 추가
    }
    
    sumArr(arr); // 함수 호출
});


/** 배수 확인 함수
 * @param a 
 * @param b
*/

function multipleFn(a,b){
    let aaa = "";
    
    if(a%b === 0){
        aaa = "맞습니다";
    } else {
        aaa = "아닙니다";
    }
    
    alert(`${a}은/는 ${b}의 배수가 ${aaa}.`)
}

    const btn3 = document.querySelector("#btn3");
    btn3.addEventListener("click", function (){
        const inputs = document.querySelectorAll("[name=input3]");
        const a = Number(inputs[0].value);
        const b = Number(inputs[1].value);
        multipleFn(a,b);


    });



/** return 확인1
 * @param num : 곱해질 정수
 * @param x : 지수
 */

function pow(num, x){
    
    // 곱셈, 나눗셈시 영향없는 수 === 1
    let result = 1;
    for(let i=0 ; i<x ; i++){
        result *= num; // result에 num을 계속 곱함

    } 
    return result; // 함수 종료 + 호출한 곳으로 result 가지고 돌아감
}

/** 제곱의 결과를 문자열로 변환해서 반환하는 함수
 * @param num
 * @param x
 * @param result : num의 x제곱
 * @return "num의 x제곱은 result입니다."
 */
function createStr(num, x, result){
    return `${num}의 ${x}제곱은 ${result}입니다.`
}

// 버튼 클릭시 prompt를 이용해서 정수, 지수 입력받아 결과출력
const btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", function(){
    const num = Number(prompt("정수 입력"));
    const x = Number(prompt("지수 입력"));
    alert(createStr(num, x, pow(num,x)) );

});



/** prompt에 입력된 값을 숫자 배열로 바꿔서 변환 
 * @param num : 입력 받을 수의 개수
 * @return arr : 입력 받은 수가 저장된 배열
*/

function createArray(num){
    const arr = [];
    for(let i=0 ; i<num ; i++){

        const val = Number(prompt(`${i}번째 인덱스에 대입할 숫자`));
        arr.push(val);

        
    }

    return arr;
}

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function(){

    const arr =createArray(5); // 생성된 배열을 반환 받아 저장

    // 합계 출력 함수 호출(함수 재사용)
    sumArr(arr);
});


/* 함수를 반환하는 함수 */
function createCounter(){
    let count = 10;
    
    const fn = function(){
        count++;
        return count;
    }

    return fn; // 함수를 반환
}

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function(){

    // 반환된 함수를 counter를 
    const counter = createCounter();
    console.log(counter()); //1
    console.log(counter()); //2
    console.log(counter()); //3
    console.log(counter()); //4
    console.log(counter()); //5
    
});

/* Closure(클로저)
   - 외부 함수에서
      종료된 내부 함수에 선언된 변수를 사용하는 기술


   특징 1 : 데이터 은닉
   - 외부에서 직접 접근할 수 없는 상태의 변수를 만들 수 있다.

   특징 2 : 상태 유지
   - 외부에서 함수를 수행한 후에도
     내부 함수의 변수 값이 변한 상태로 유지됨
 */


/* 매개 변수/return으로 익명 함수 전달하기 */
const btn7 = document.querySelector("#btn7");


btn7.addEventListener("click", function(){

    const resultFn = testFn7(function(a,b){return a+b});

    console.log("resultFn(3) : ", resultFn(3));
});

function testFn7(otherFn){

    return function(num){
        return otherFn(10, 20) * num;
    }
}


