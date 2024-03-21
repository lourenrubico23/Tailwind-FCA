/* Burger Button */
const burger = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
burger.addEventListener("click", () =>{
    burger.classList.toggle("open");
    headerA.classList.toggle("open");
})


/* Links / Dropdown */
const links = document.querySelectorAll(".card h3");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});

/* Partnering or Displaying its content */
const questionNav = document.querySelectorAll(".menu-1");
const questionContent = document.querySelectorAll(".card");
questionNav.forEach((question) => {
  question.addEventListener("click", () => {
    removeActiveStar();
    question.classList.add("active");
    const activeContent = document.querySelector(`#${question.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});
function removeActiveStar() {
    questionNav.forEach((question) => {
      question.classList.remove("active");
    });
  }
  function removeActiveContent() {
      questionContent.forEach((content) => {
        content.classList.remove("active");
      });
    }
    