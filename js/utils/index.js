let BASE_URL = "https://676ac315863eaa5ac0df8bfd.mockapi.io";

const useFetch = () => {
  const request = ({ url, method = "GET", data }) => {
    return fetch(`${BASE_URL}/${url}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: data,
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };
  return request;
};
function addData(value, cards) {
  let card = document.createElement("div");
  card.innerHTML = `
      <div class="rounded-[20px] bg-white p-3 cc relative">
      <i class="like_btn absolute top-3 left-4 fa-regular fa-heart"></i>
      <form class="formdiv flex items-center justify-center imgdiv flex-col gap-5  ">
        <img
          id="imgp"
          class="h-[160px] object-cover"
          src="${
          value.img
        }"
          alt=""
        />
      </form>
      <div class="flex flex-col gap-2">
        <h2
          id="namep"
          class="text-[14px] font-medium text-[#141821] hover:text-primary duration-500"
        >
          ${value.name}
        </h2>
        <div class="flex items-center justify-between gap-4">
          <img class="w-[60px]" src="./assets/svg/star.svg" alt="" />
          <div class="flex gap-1.5 text-[12px] text-[#c2c6d1] font-medium">
            <p id="havep">${value.have}</p>
            <p>отзывов</p>
          </div>
        </div>
        <div class="text-[12px] flex gap-1.5 text-[#94a3b8] line-through">
          <p id="oldp">${value.old_price}</p>
          <p>сум</p>
        </div>
        <div class="text-[18px] flex gap-1.5 font-bold text-primary">
          <p id="pricep">${value.price}</p>
          <p>сум</p>
        </div>
        <div
          class="font-medium flex gap-2 text-[#fe7300] border-[1.5px] py-0.5 px-2 rounded-lg border-[#fe7300]"
        >
          <p id="monthpayp">${value.month_payment}</p>
          <p>сум x</p>
          <p id="monthp" class="monthp">${value.month}</p>
          <p class="monthp">мес</p>
        </div>
        
        <p id="typep">${value.type}</p>
        <div class="flex items-center gap-1">
          <button
            id="${value.id}"
            class="edit rounded-xl text-[20px] bg-primary py-1.5 px-4 text-white"
          >
            edit
          </button>

          <i
            id="${value.id}"
            class="text-white fa-solid fa-trash delete rounded-xl bg-[#00bfaf] py-3.5 px-4"
          ></i>
        </div>
      </div>
    </div>
          `;
  cards.append(card);
}
export { useFetch, addData };
