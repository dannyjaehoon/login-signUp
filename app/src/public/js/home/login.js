"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBt = document.querySelector("#loginBtn");

loginBt.addEventListener("click", login);

function login(evt) {
  evt.preventDefault();

  const req = {
    id: id.value,
    psword: pw.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러발생"));
    });
}
