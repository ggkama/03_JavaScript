class MemberManager {
  static members = [];

  static validateAndCheckDuplicates(userId, userName, userPhone) {
    if (!userId || !userName || !userPhone) {
      alert("모든 필드를 입력해주세요.");
      return false;
    }

    if (this.members.some(member => member.userId === userId)) {
      alert("이미 존재하는 아이디입니다.");
      return false;
    }

    if (this.members.some(member => member.userPhone === userPhone)) {
      alert("이미 등록된 전화번호입니다.");
      return false;
    }

    return true;
  }

  static registerMember(userId, userName, userPhone) {
    if (!this.validateAndCheckDuplicates(userId, userName, userPhone)) {
      return;
    }

    this.members.push({ userId, userName, userPhone });
    this.updateMemberTable();

  }

  static updateMemberTable() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    this.members.forEach((member, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td><input type="checkbox" data-index="${index}"></td>
        <td>${member.userId}</td>
        <td>${member.userName}</td>
        <td>${member.userPhone}</td>
      `;

      tbody.appendChild(row);
    });
  }

  static deleteSelectedMembers() {
    const tbody = document.querySelector("tbody");
    const selectedCheckboxes = Array.from(tbody.querySelectorAll("input[type='checkbox']:checked"));

    if (selectedCheckboxes.length === 0) {
      alert("삭제할 회원을 선택해주세요.");
      return;
    }

    const selectedIndexes = selectedCheckboxes.map(checkbox => Number(checkbox.dataset.index));

    for (let i = selectedIndexes.length - 1; i >= 0; i--) {
      this.members.splice(selectedIndexes[i], 1);
    }

    this.updateMemberTable();



  }

  static toggleSelectAll(selectAllCheckbox) {
    const tbody = document.querySelector("tbody");
    const allCheckboxes = tbody.querySelectorAll("input[type='checkbox']");
    allCheckboxes.forEach(checkbox => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  }
}

// 요소 가져오기
const userIdInput = document.getElementById("userId");
const userNameInput = document.getElementById("userName");
const userPhoneInput = document.getElementById("userPhone");
const registerBtn = document.getElementById("registerBtn");
const deleteBtn = document.getElementById("deleteBtn");
const selectAllCheckbox = document.getElementById("selectAll");

// 이벤트 리스너 등록
registerBtn.addEventListener("click", () => {
  const userId = userIdInput.value.trim();
  const userName = userNameInput.value.trim();
  const userPhone = userPhoneInput.value.trim();

  MemberManager.registerMember(userId, userName, userPhone);

  // 입력 필드 초기화
  userIdInput.value = "";
  userNameInput.value = "";
  userPhoneInput.value = "";
});

deleteBtn.addEventListener("click", () => MemberManager.deleteSelectedMembers());

selectAllCheckbox.addEventListener("change", () => MemberManager.toggleSelectAll(selectAllCheckbox));
