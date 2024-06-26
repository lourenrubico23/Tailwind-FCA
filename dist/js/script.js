/* Burger Button */
const burger = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
const body = document.querySelector("body");
burger.addEventListener("click", () =>{
    burger.classList.toggle("open");
    headerA.classList.toggle("open");
    body.classList.toggle('open');
})


/* Links / Dropdown */
const links = document.querySelectorAll(".coffee__text h5");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});

/* Partnering or Displaying its content / Tabs*/
const starNav = document.querySelectorAll(".coffee__nav__link");
const starContent = document.querySelectorAll(".coffee__item");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}
function removeActiveContent() {
    starContent.forEach((content) => {
      content.classList.remove("active");
    });
  }
    