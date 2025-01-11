let BASE_URL = "https://676ac315863eaa5ac0df8bfd.mockapi.io/figma_asaxiy";
import { useFetch, addData } from "./utils/index.js";
let request = useFetch();
function access() {
  if (!localStorage.getItem("access")) {
    localStorage.removeItem("access");
    window.location.href = "./login.html";
  }
}

let search_form = document.querySelector(".search_form");
let logout = document.querySelector(".logout");
let cards = document.querySelector(".cards");
// felch
function fetchfunc() {
  request({ url: "figma_asaxiy" }).then((data) => {
    getData(data), search(data);
  });
}
// getdata
function getData(data) {
  cards.innerHTML = "";
  data.forEach((value) => {
    addData(value, cards);
  });
}
// edit delete
cards.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    deleteFunc(e.target.id);
    fetchfunc();
  }
  if (e.target.classList.contains("edit")) {
    // alert(
    //   "narxlar orasida joy bolmasa qorqmang home pageda joylar ochilgan boladi va edit qilib save btn bosgandan so'ng refresh bering "
    // );
    edit(e.target.id);
  }
});
//delete
async function deleteFunc(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  fetchfunc();
}
//search
function search(data) {
  search_form.addEventListener("click", (e) => {
    e.preventDefault();
    let search_input = document.querySelector("#search_input");
    if (search_input.value) {
      let searchinput = search_input.value.toLowerCase().trim();
      let searchData = data.filter((value) =>
        value.name.toLowerCase().trim().includes(searchinput)
      );
      cards.innerHTML = "";
      getData(searchData);
    } else {
      fetchfunc();
    }
  });
}

// edit
function edit(id) {
  // let imgp = document.querySelector("#imgp");
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

  [
    imgpInput,
    namepInput,
    havepInput,
    oldpInput,
    pricepInput,
    monthpaypInput,
    monthpInput,
    typepInput,
  ].forEach((value) => {
    value.style.width = "100%";
    value.style.background = "rgb(211, 211, 211)";
    value.style.borderRadius = "5px";
    value.style.padding = "3px";
    value.type = "text";
  });

  imgpInput.type = "file";
  imgpInput.background = "dark-blue";

  fetch(`${BASE_URL}/${id}`, { method: "GET" })
    .then((data) => data.json())
    .then(
      (data) => (
        (namepInput.value = data.name),
        (havepInput.value = data.have),
        (oldpInput.value = data.old_price),
        (pricepInput.value = data.price),
        (monthpaypInput.value = data.month_payment),
        (monthpInput.value = data.month),
        (typepInput.value = data.type)
      )
    );

  imgdiv.style.paddingBottom = "30px";

  havepInput.style.background = "rgb(0,0,0)";
  oldpInput.style.background = "rgb(0,0,0)";

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
  editBtn.textContent = "Save";
  // let obj = {
  //   id,
  //   img: imgpInput.value,
  //   name: namepInput.value,
  //   have: +havepInput.value,
  //   old_price: +oldpInput.value,
  //   price: +pricepInput.value,
  //   month_payment: +monthpaypInput.value,
  //   month: +monthpInput.value,
  //   type: typepInput.value.toUpperCase(),
  // };
  // let formdiv = document.querySelector(".formdiv");

  // let file = imgpInput.files[0];
  // // let baseImg = "";
  // let reader = new FileReader();
  // reader.onload = function (e) {
  //   // baseImg = e.target.result;
  //   // console.log(e.target.result);
  //   let imgUrl = reader.result;
  //   fetch("https://676ac315863eaa5ac0df8bfd.mockapi.io/figma_asaxiy", {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       img: imgUrl,
  //     }),
  //   })
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(imgUrl);
  //       ;
  //     });
  // };
  // reader.readAsDataURL(file);

  editBtn.addEventListener("click", (e) => {
    // console.log(imgpInput.files[0]);

    let file = imgpInput.files[0];

    // if (file) {
    let reader = new FileReader();

    reader.onload = function (e) {
      let imgurl = e.target.result;
      // console.log(imgurl);
      editfunc(id, {
        img: imgurl,
        name: namepInput.value,
        have: +havepInput.value,
        old_price: +oldpInput.value,
        price: +pricepInput.value,
        month_payment: +monthpaypInput.value,
        month: +monthpInput.value,
        type: typepInput.value,
      });
    };
    reader.readAsDataURL(file);
    // } else {
    // console.log(file);
    // }
  });
}

// log out
logout.addEventListener("click", (e) => {
  localStorage.removeItem("access");
  window.location.href = "./index.html";
});

// put edit data
function editfunc(id, data) {
  fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(() => window.location.reload());
}
fetchfunc();
access()
