const phoneNumber = document.getElementById("phoneNum"); // 화면에 표시되는 전화번호 Span
const phoneListContainer = document.getElementById("list"); // 전화번호 리스트
const keys = document.querySelectorAll(".key"); // 키패드 버튼들
const resetBtn = document.getElementById("resetBtn"); // 초기화 버튼
const addBtn = document.getElementById("addBtn"); // 추가 버튼

let phoneNum = ""; // 입력된 전화번호 값

// 키패드 입력 처리
function keyPress(event) {
    if (phoneNum.length < 11) { // 12자리 리밋
        phoneNum += event.target.textContent;
        phoneNumber.textContent = phoneNum; // 번호 표시
    } else {
        alert("정확한 번호를 입력해주세요."); // 12자리 이상 입력시 -> alert
    }
}

// 초기화 버튼 
function resetPhoneNumber() {
    phoneNum = ""; // 전화번호 초기화
    phoneNumber.textContent = phoneNum; // 화면에서 비우기
}

// 번호 추가 버튼
function addPhoneNumber() {
    if (phoneNum.trim() !== "") { // 공백 제거 후 확인
        const phoneText = document.createElement("div");
        phoneText.className = "phone-Text";

        phoneText.innerHTML = `
            <span>${phoneNum}</span>
            <button class="deleteBtn">X</button>
            <button class="starBtn">☆</button>
        `;

        // 삭제 버튼 기능 추가
        phoneText.querySelector(".deleteBtn").addEventListener("click", () => {
            phoneText.remove();
        });

        // 즐겨찾기 버튼 기능 추가 ☆ 사용
        phoneText.querySelector(".starBtn").addEventListener("click", function () {
            this.textContent = this.textContent === "☆" ? "★" : "☆";
        });

        phoneListContainer.append(phoneText); // 리스트에 추가

        // 전화번호 초기화
        phoneNum = "";
        phoneNumber.textContent = phoneNum; 
    } else {
        alert("전화번호를 입력해주세요."); // 숫자 x -> alert
    }
}

// 버튼 설정
function setKeypadListeners() {
    keys.forEach(key => {
        key.addEventListener("click", keyPress);
    });
}

// 초기화 설정
function setResetButtonListener() {
    resetBtn.addEventListener("click", resetPhoneNumber);
}

// 추가 설정
function setAddButtonListener() {
    addBtn.addEventListener("click", addPhoneNumber);
}

// 초기화
function init() {
    setKeypadListeners();
    setResetButtonListener();
    setAddButtonListener();
}

init();


