let BASE_URL = "https://676ac315863eaa5ac0df8bfd.mockapi.io/figma_asaxiy";
let form = document.querySelector("#form");
let name = document.querySelector("#name");
let old_price = document.querySelector("#old_price");
let price = document.querySelector("#price");
let month = document.querySelector("#month");
let month_payment = document.querySelector("#month_payment");
let have = document.querySelector("#have");
let type = document.querySelector("#type");

// import { useFetch } from "./utils/index.js";
// let request = useFetch();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        name: name.value,
        img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/730da709587f0a0a03e74628c17850122024111617301069457J5leLA0Zz1.jpg",
      have: +have.value,
      old_price: +old_price.value,
      price: +price.value,
      month: +month.value,
      month_payment: +month_payment.value,
      type: type.value.toUpperCase(),
    }),
}).then(data=>data.json()).then(data=>alert("shunada malumot qoshdimgiz",data));
});

//   request({
//     url: "figma_asaxiy",
//     method: "POST",
//     data: {
//       name: "form.name.value",
//       img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/730da709587f0a0a03e74628c17850122024111617301069457J5leLA0Zz1.jpg",
//       have: +form.have.value,
//       old_price: +form.old_price.value,
//       price: +form.price.value,
//       month: +form.month.value,
//       month_payment: +form.month_payment.value,
//       type: +form.type.value,
//     },
//   });