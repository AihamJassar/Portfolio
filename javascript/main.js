const menu = document.querySelector(".menu");
menu.addEventListener("click", _ => {
  let links = document.querySelector(".links");
  links.classList.toggle("open-menu");
}); 

let links = document.querySelectorAll(".links a");
links.forEach(el => {
  el.addEventListener("click", e => {
    links.forEach(el => {
      el.classList.remove("active-link");
    });
    e.target.classList.add("active-link");
  });
});