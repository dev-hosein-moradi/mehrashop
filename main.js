/* action for category toggler button in hero page */
const category__toggler = document.querySelector(".category__toggler");

category__toggler.addEventListener("click", function () {
  const category__list = document.querySelector(".category__items");

  if (category__list.classList[1] === "open") {
    category__list.classList.remove("open");
    category__list.classList.add("close");
  } else {
    category__list.classList.remove("close");
    category__list.classList.add("open");
  }

});

/* action for menu toggler button in navbar header */
const menu__toggler = document.querySelector(".burger__menu");

menu__toggler.addEventListener("click", function () {
  const menu__list = document.querySelector(".header__aside");

  if (menu__list.classList[1] === "open") {
    menu__list.classList.remove("open");
    menu__list.classList.add("close");
  } else {
    menu__list.classList.remove("close");
    menu__list.classList.add("open");
  }

});

/* action for close menu toggler button in sidebar header */

const close__toggler = document.querySelector(".close__btn");

close__toggler.addEventListener("click", function () {
  const menu__list = document.querySelector(".header__aside");

  if (menu__list.classList[1] === "open") {
    menu__list.classList.remove("open");
    menu__list.classList.add("close");
  } else {
    menu__list.classList.remove("close");
    menu__list.classList.add("open");
  }

});
