"use strict";
const elNum1 = document.querySelector(".num1");
const elSelect = document.querySelector(".select");
const elNum2 = document.querySelector(".num2");
const elBtn = document.querySelector(".btn");
const elTitle = document.querySelector(".title")

elBtn.addEventListener("click", (e)=>{
    let answer = eval(elNum1.value + elSelect.value + elNum2.value);
    elTitle.textContent = `Natija = ${answer}`
})