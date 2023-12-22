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

// Process Slider Effect
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  asNavFor: ".slider-nav",
  customPaging: function (slider, index) {
    var num = index + 1;
    return '<button class="dot">' + "" + "</button>";
  },
});

$(".slider-nav").slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  asNavFor: ".slider-for",
  dots: false,
  focusOnSelect: true,
  vertical: true,
});

// Products Slider Effect
$(".products__items").slick({
  slidesToShow: 4.3,
  slidesToScroll: 3,
  centerMode: false,
  infinite: false,
  dots: true,
  customPaging: function (slider, index) {
    var num = index + 1;
    return '<button class="dot">' + "" + "</button>";
  },
  prevArrow: '<button class="slick-prev"><span></span></button>',
  nextArrow: '<button class="slick-next"><span></span></button>',
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

      target.style.width = `${width}px`;
      target.style.left = `${left}px`;
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
