"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirmPw");
const signUpBt = document.querySelector("#signUpBtn");

signUpBt.addEventListener("click", signUp);

function signUp(evt) {
  evt.preventDefault();

  if (!id.value) return alert("아이디를 입력해주세요");
  if (pw.value !== confirmPw.value)
    return alert("비밀번호가 일치하지 않습니다");

  const req = {
    id: id.value,
    name: name.value,
    psword: pw.value,
    confirmPassword: confirmPw.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("회원가입이 되었습니다");
        location.href = "/login";
      } else {
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러발생"));
    });
}
