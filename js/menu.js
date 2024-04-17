const button = document.querySelector(".menu-button-js");
const list = document.querySelector(".menu-js");
button.addEventListener("click", () => {
  if (!list.classList.contains("open")) {
    list.classList.add("open");
    list.classList.remove("close");
  } else {
    list.classList.replace("open", "close");
  }
});

const itemlink = document.querySelectorAll(".header-menu-link");
const itemlinks = document.querySelectorAll(".header-menu-link");

itemlinks.forEach((itemlink) => {
  itemlink.addEventListener("click", () => {
    list.classList.remove("open");
  });
});
