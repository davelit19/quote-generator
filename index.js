"use strict"
const advice = document.getElementById("advice");
const adviceId = document.getElementById("advice-id");
const btn = document.getElementById("btn")


btn.addEventListener("click", function () {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            advice.textContent = data.slip.advice;
            adviceId.textContent = data.slip.id;

        })
})