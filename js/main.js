let BASE_URL = "https://676ac315863eaa5ac0df8bfd.mockapi.io/figma_asaxiy";
import { useFetch, addData } from "./utils/index.js";
let request = useFetch();
function access() {
  if (!localStorage.getItem("access")) {
    localStorage.removeItem("access");
    window.location.href = "./login.html";
  }
}
access();

let cards = document.querySelector(".cards");

request({ url: "figma_asaxiy" }).then((data) => {
  getData(data);
});

function getData(data) {
  cards.innerHTML = "";
  data.forEach((value) => {
    addData(value, cards);
  });
}
cards.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    deleteFunc(e.target.id);
  }
  if (e.target.classList.contains("edit")) {
    // alert(
    //   "narxlar orasida joy bolmasa qorqmang home pageda joylar ochilgan boladi va edit qilib save btn bosgandan so'ng refresh bering "
    // );

    // console.log(e.target.id);

    edit(e.target.id);
  }
});
function deleteFunc(id) {
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}

// edit
function edit(id) {
  let imgp = document.querySelector("#imgp");
  let imgdiv = document.querySelector(".imgdiv");
  let namep = document.querySelector("#namep");
  let havep = document.querySelector("#havep");
  let oldp = document.querySelector("#oldp");
  let pricep = document.querySelector("#pricep");
  let monthpayp = document.querySelector("#monthpayp");
  let monthp = document.querySelector("#monthp");
  let typep = document.querySelector("#typep");

  let imgpInput = document.createElement("input");
  let namepInput = document.createElement("input");
  let havepInput = document.createElement("input");
  let oldpInput = document.createElement("input");
  let pricepInput = document.createElement("input");
  let monthpaypInput = document.createElement("input");
  let monthpInput = document.createElement("input");
  let typepInput = document.createElement("input");

  imgpInput.type = "text";
  namepInput.type = "text";
  havepInput.type = "text";
  oldpInput.type = "text";
  pricepInput.type = "text";
  monthpaypInput.type = "text";
  monthpInput.type = "text";
  typepInput.type = "text";

  fetch(`${BASE_URL}/${id}`,{
    method:"GET"
  }).then(data=>data.json())
  .then(data=>
  (
    
      imgpInput.value = data.img ,
      namepInput.value = data.name ,
      havepInput.value = data.have ,
      oldpInput.value = data.old_price ,
      pricepInput.value = data.price ,
      monthpaypInput.value = data.month_payment ,
      monthpInput.value = data.month ,
      typepInput.value = data.type 
  ),
  )

  imgpInput.style.width = "100%";
  namepInput.style.width = "100%";
  havepInput.style.width = "100%";
  oldpInput.style.width = "100%";
  pricepInput.style.width = "100%";
  monthpaypInput.style.width = "100%";
  monthpInput.style.width = "100%";
  typepInput.style.width = "100%";
  imgdiv.style.paddingBottom = "30px";

  imgpInput.style.background = "rgb(211, 211, 211)";
  namepInput.style.background = "rgb(211, 211, 211)";
  havepInput.style.background = "rgb(0,0,0)";
  oldpInput.style.background = "rgb(0,0,0)";
  pricepInput.style.background = "rgb(211, 211, 211)";
  monthpaypInput.style.background = "rgb(211, 211, 211)";
  monthpInput.style.background = "rgb(211, 211, 211)";
  typepInput.style.background = "rgb(211, 211, 211)";

  imgpInput.style.borderRadius = "5px";
  namepInput.style.borderRadius = "5px";
  havepInput.style.borderRadius = "5px";
  oldpInput.style.borderRadius = "5px";
  pricepInput.style.borderRadius = "5px";
  monthpaypInput.style.borderRadius = "5px";
  monthpInput.style.borderRadius = "5px";
  typepInput.style.borderRadius = "5px";

  imgpInput.style.padding = "3px";
  namepInput.style.padding = "3px";
  havepInput.style.padding = "3px";
  oldpInput.style.padding = "3px";
  pricepInput.style.padding = "3px";
  monthpaypInput.style.padding = "3px";
  monthpInput.style.padding = "3px";
  typepInput.style.padding = "3px";

  imgp.src = "";
  namep.textContent = "";
  havep.textContent = "";
  oldp.textContent = "";
  pricep.textContent = "";
  monthpayp.textContent = "";
  monthp.textContent = "";
  typep.textContent = "";

  imgdiv.append(imgpInput);
  namep.append(namepInput);
  havep.append(havepInput);
  oldp.append(oldpInput);
  pricep.append(pricepInput);
  monthpayp.append(monthpaypInput);
  monthp.append(monthpInput);
  typep.append(typepInput);
  let editBtn = document.querySelector(".edit");
  let edt_btn = editBtn;
  edt_btn.textContent = "Save";
  edt_btn.onclick = () => {
    editfunc(
      id,
      imgpInput.value,
      namepInput.value,
      +havepInput.value,
      +oldpInput.value,
      +pricepInput.value,
      +monthpaypInput.value,
      +monthpInput.value,
      typepInput.value
    );
  };
}

async function editfunc(
  id,
  imgpInput,
  namepInput,
  havepInput,
  oldpInput,
  pricepInput,
  monthpaypInput,
  monthpInput,
  typepInput
) {
 await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      img: imgpInput,
      name: namepInput,
      have: havepInput,
      old_price: oldpInput,
      price: pricepInput,
      month_payment: monthpaypInput,
      month: monthpInput,
      type: typepInput.toUpperCase(),
    }),
  });
  window.location.reload();
}
