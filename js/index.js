let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    autoplay: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // "@0.50": {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    // },
    // "@0.75": {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    // },
    // "@1.00": {
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    // },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// according
const accordingContent = document.querySelectorAll(".according-content");
accordingContent.forEach((item, index) => {
  let header = item.querySelector("header");

  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".according-des");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
      item.querySelector("i").classList.replace("fa-angle-down", "fa-angle-up");
    } else {
      description.style.height = "0px";
      item.querySelector("i").classList.replace("fa-angle-up", "fa-angle-down");
    }
    removeOpen(index);
  });
});
function removeOpen(index1) {
  accordingContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let des = item2.querySelector(".according-des");
      des.style.height = "0px";
      item2
        .querySelector("i")
        .classList.replace("fa-angle-down", "fa-angle-up");
    }
  });
}
