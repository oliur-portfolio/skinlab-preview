document.addEventListener("DOMContentLoaded", function () {
  // Faq More Expand Effect
  const faqExpandBtns = document.querySelectorAll(".faq--expand-btn");

  faqExpandBtns.forEach((accordion) => {
    accordion.onclick = function () {
      let content = this.previousElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
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
  $(".default-accordion .accordion__question").click(function (e) {
    e.preventDefault();
    var notthis = $(".active-default").not(this);
    notthis
      .toggleClass("active-default")
      .next(".default-accordion .accordion__answer")
      .slideToggle(300);
    $(this).toggleClass("active-default").next().slideToggle("fast");
  });

  $(".faq-accordion .accordion__question").click(function (e) {
    e.preventDefault();

    const faqExpandBtns = document.querySelectorAll(".faq--expand-btn");

    faqExpandBtns.forEach((acord) => {
      let content = acord.previousElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = "fit-content";
      } else {
        content.style.maxHeight = null;
      }
    });

    var notthis = $(".active-faq").not(this);
    notthis
      .toggleClass("active-faq")
      .next(".faq-accordion .accordion__answer")
      .slideToggle(300);
    $(this).toggleClass("active-faq").next().slideToggle("fast");
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

  // Process Slider
  var swiperNav = new Swiper("#processNav, #laserNav", {
    direction: "vertical",
    slidesPerView: 6,
    spaceBetween: 40,
    mousewheel: false,
  });

  const swiperMain = new Swiper("#processSlider, #laserSlider", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 500,
    thumbs: {
      swiper: swiperNav,
    },
    pagination: {
      el: ".swiper-pagination--process, .swiper-pagination--laser",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next--process, .swiper-button-next--laser",
      prevEl: ".swiper-button-prev--process, .swiper-button-prev--laser",
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
        slidesPerView: 4.8,
        slidesPerGroup: 3,
      },
    },
  });

  // Video Play
  var video = document.getElementById("myVideo");
  var playButton = document.getElementById("playButton");

  function playVideo() {
    video.play();
    video.setAttribute("controls", "controls");
    playButton.style.display = "none";
  }

  if (video) {
    video.addEventListener("pause", function () {
      playButton.style.display = "block";
      video.removeAttribute("controls");
    });

    video.addEventListener("play", function () {
      playButton.style.display = "none";
      video.setAttribute("controls", "controls");
    });
  }

  window.playVideo = playVideo;

  // Table Blur Effect
  const customTables = document.querySelectorAll(".table");

  customTables.forEach((customTable) => {
    let startX;

    customTable.addEventListener("touchstart", function (event) {
      startX = event.touches[0].clientX;
    });

    customTable.addEventListener("touchmove", function (event) {
      const currentX = event.touches[0].clientX;
      const threshold = 5;

      if (startX - currentX > threshold) {
        let container = customTable.parentNode.parentNode.parentNode;
        container.classList.add("swiped");
      } else if (currentX - startX > threshold) {
        let container = customTable.parentNode.parentNode.parentNode;
        container.classList.remove("swiped");
      }
    });
  });

  // Product Nav Blur Effect
  const productCatNavs = document.querySelectorAll(
    ".product-category-nav-overflow"
  );

  // Iterate over each element
  productCatNavs.forEach((productCatNav) => {
    // Add event listener for scroll to each element
    productCatNav.addEventListener("scroll", function () {
      // Store the previous scroll position for each element
      let prevScrollPositionProductNav = productCatNav.scrollLeft;

      // Update the blur effect based on scroll direction for each element
      productCatNav.addEventListener("scroll", function () {
        const currentScrollPositionProductNav = productCatNav.scrollLeft;

        if (currentScrollPositionProductNav > prevScrollPositionProductNav) {
          productCatNav.parentNode.classList.add("swiped");
        } else if (
          currentScrollPositionProductNav < prevScrollPositionProductNav
        ) {
          productCatNav.parentNode.classList.remove("swiped");
        }

        prevScrollPositionProductNav = currentScrollPositionProductNav;
      });
    });
  });

  // Filter Sidebar Open
  const filterSidebar = document.querySelector(".filter-sidebar-area");
  const filterBtn = document.querySelector(".filter-btn");
  const filterCloseBtn = document.querySelector(".filter-sidebar__close");

  filterBtn.addEventListener("click", () => {
    filterSidebar.classList.add("filter-sidebar--open");
  });

  filterCloseBtn.addEventListener("click", () => {
    filterSidebar.classList.remove("filter-sidebar--open");
  });
});

// Zorgchecker Form Step
const zorgcheckerSteps = document.querySelectorAll(".zorgcheck__step");
const zorgcheckerContents = document.querySelectorAll(
  ".zorgcheck-step__content"
);

function moveToNextStep(currentIndex) {
  zorgcheckerContents.forEach((c) =>
    c.classList.remove("zorgcheck-step__content--active")
  );

  if (currentIndex < zorgcheckerContents.length - 1) {
    zorgcheckerContents[currentIndex + 1].classList.add(
      "zorgcheck-step__content--active"
    );
  } else {
    handleAllStepsCompleted();
  }
}

function handleAllStepsCompleted() {
  alert("All steps completed!");
  location.reload();
}

zorgcheckerContents.forEach((content, index) => {
  const radioButtons = content.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      moveToNextStep(index);
      if (index < zorgcheckerSteps.length - 1) {
        zorgcheckerSteps[index + 1].classList.add("zorgcheck__step--active");
      }
    });
  });

  if (index === 1) {
    const step2Button = content.querySelector(".custom-btn--birth");
    if (step2Button) {
      step2Button.addEventListener("click", () => {
        moveToNextStep(index);
        if (index < zorgcheckerSteps.length - 1) {
          zorgcheckerSteps[index + 1].classList.add("zorgcheck__step--active");
        }
      });
    }
  }
});

// Filter Button Sticky
var filterBtn = document.querySelector(".filter-btn");
var windowHeight = window.innerHeight;
var buffer = 100; // Adjust this value as needed

function toggleFilterBtnClass() {
  var filterBtnPosition = filterBtn.getBoundingClientRect().top;

  if (filterBtnPosition < windowHeight - buffer) {
    filterBtn.classList.add("filter-btn--sticky");
  } else {
    filterBtn.classList.remove("filter-btn--sticky");
  }
}

window.addEventListener("scroll", toggleFilterBtnClass);
window.addEventListener("resize", function () {
  windowHeight = window.innerHeight;
  toggleFilterBtnClass();
});
