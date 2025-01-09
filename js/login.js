import { useFetch } from "./utils/index.js";
let request = useFetch();
let local = JSON.parse(localStorage.getItem("access")) || [];

let form = document.getElementById("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
      if ("admin" == email.value && "admin123" == password.value) {
        localStorage.setItem("access", JSON.stringify("admin entred"));
        window.location.href = "../index.html";
      }
});
//admin   login
// admin123  password
