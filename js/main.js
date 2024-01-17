// Process Slider
var swiperNav = new Swiper(".process__items", {
  direction: "vertical",
  slidesPerView: 6,
  spaceBetween: 40,
  mousewheel: false,
});

const swiperMain = new Swiper(".process__slider", {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  speed: 500,
  thumbs: {
    swiper: swiperNav,
  },
  pagination: {
    el: ".swiper-pagination--process",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next--process",
    prevEl: ".swiper-button-prev--process",
  },
});

const swiperSubmenu = new Swiper(".submenu__slider", {
  loop: true,

  pagination: {
    el: ".swiper-pagination--submenu",
    clickable: true,
  },
});

const swiperProduct = new Swiper(".products__items", {
  loop: false,
  slidesPerView: 4.3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination--product",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next--product",
    prevEl: ".swiper-button-prev--product",
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    550: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 1.8,
      slidesPerGroup: 1,
    },
    991: {
      slidesPerView: 2.4,
      slidesPerGroup: 1,
    },
    1199: {
      slidesPerView: 3.2,
      slidesPerGroup: 1,
    },
    1600: {
      slidesPerView: 4.3,
      slidesPerGroup: 3,
    },
  },
});

// Animated Hamburger Icon
const navToggleBtn = document.querySelector(".navbar-toggler");
const header = document.querySelector(".header");

navToggleBtn.addEventListener("click", () => {
  navToggleBtn.classList.toggle("change");
  header.classList.toggle("mobile-nav");
  document.body.classList.toggle("overflow-hidden");
});

// Accordion Effect
$(".accordion__question").click(function (e) {
  e.preventDefault();
  var notthis = $(".active").not(this);
  notthis.toggleClass("active").next(".accordion__answer").slideToggle(300);
  $(this).toggleClass("active").next().slideToggle("fast");
});

document.addEventListener("DOMContentLoaded", function () {
  var submenuItems = document.querySelectorAll(".main-header__links-submenu");

  submenuItems.forEach(function (submenuItem) {
    submenuItem.addEventListener("mouseover", function () {
      document
        .querySelector(".main-header-area")
        .classList.add("main-header-area--submenu");
    });

    submenuItem.addEventListener("mouseout", function () {
      document
        .querySelector(".main-header-area")
        .classList.remove("main-header-area--submenu");
    });
  });
});

// Search toggle
const searchOpen = document.getElementById("searchOpen");
const searchBox = document.querySelector(".search-overlay");
const searchClose = document.querySelector(".close-search-btn");

searchOpen.addEventListener("click", () => {
  searchBox.classList.add("search-overlay--show");
  document.body.style.overflow = "hidden";
});

searchClose.addEventListener("click", () => {
  searchBox.classList.remove("search-overlay--show");
  document.body.style.overflow = "auto";
});

document.addEventListener("mouseup", function (e) {
  if (e.target.classList.contains("search-overlay--show")) {
    searchBox.classList.remove("search-overlay--show");
    document.body.style.overflow = "auto";
  }
});

const headerArea = document.querySelector(".header");

// Sticky Header
window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    headerArea.classList.add("header--is-sticky");

    headerArea.addEventListener("mouseenter", () => {
      if (headerArea.classList.contains("header--is-sticky")) {
        headerArea.classList.add("header--not-blur");
      }
    });

    headerArea.addEventListener("mouseleave", () => {
      if (headerArea.classList.contains("header--is-sticky")) {
        headerArea.classList.remove("header--not-blur");
      }
    });
  } else {
    headerArea.classList.remove("header--is-sticky");
  }
});

// Menu Hover
(function () {
  const target = document.querySelector(".target");
  const links = document.querySelectorAll(
    ".main-header__links .main-header__link"
  );

  function mouseenterFunc() {
    if (!this.parentNode.classList.contains("active")) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("active")) {
          links[i].parentNode.classList.remove("active");
        }
      }

      this.parentNode.classList.add("active");

      const width = this.getBoundingClientRect().width;
      const left = this.getBoundingClientRect().left + window.pageXOffset;

      target.style.width = `${width - 34}px`;
      target.style.left = `${left + 17}px`;
      target.style.transform = "none";
    }
  }

  function mouseleaveFunc() {
    const active = document.querySelector(".main-header__links li.active");
    if (active) {
      active.classList.remove("active");
    }
    target.style.width = "0";
  }

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => e.preventDefault());
    links[i].addEventListener("mouseenter", mouseenterFunc);
    links[i].addEventListener("mouseleave", mouseleaveFunc);
  }

  function resizeFunc() {
    const active = document.querySelector(".main-header__links li.active");

    if (active) {
      const left = active.getBoundingClientRect().left + window.pageXOffset;

      target.style.left = `${left}px`;
    }
  }

  window.addEventListener("resize", resizeFunc);
})();
