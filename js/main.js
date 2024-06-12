// Beer Slider
document.addEventListener("DOMContentLoaded", function () {
  // Swiper Slide resulten
  const swiperResulten = new Swiper(".resultaten__items", {
    loop: true,
    pagination: {
      el: ".swiper-pagination--resulten",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next--resulten",
      prevEl: ".swiper-button-prev--resulten",
    },
    autoplay: {
      delay: 10000,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      350: {
        allowTouchMove: false,
      },
      1199: {
        allowTouchMove: true,
      },
    },
  });

  var beerSliderElements = document.querySelectorAll(".beer-slider");

  beerSliderElements.forEach(function (element) {
    var slider = new BeerSlider(element);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (typeof tippy !== "undefined") {
    tippy(".price__info-btn", {
      content: "Global content",
      theme: "tomato",
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Faq Items Show
  const itemContainers = document.querySelectorAll(
    ".basic-accordion.faq-accordion"
  );
  const visibleItemCount = 10;

  itemContainers.forEach((container) => {
    const items = container.querySelectorAll(".basic-accordion__item");
    const button = container.nextElementSibling;

    for (let i = 0; i < visibleItemCount; i++) {
      if (items[i]) {
        items[i].classList.add("visible");
      }
    }

    if (button && button.classList.contains("faq--expand-btn")) {
      button.addEventListener("click", function () {
        const isExpanded =
          items[visibleItemCount].classList.contains("visible");

        if (isExpanded) {
          items.forEach((item, index) => {
            if (index >= visibleItemCount) {
              item.classList.remove("visible");
            }
          });
          button.textContent = "Meer Vragen";
        } else {
          items.forEach((item) => item.classList.add("visible"));
          button.textContent = "Minder Vragen";
        }
      });
    }
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

  // Sticky Header
  const headerArea = document.querySelector(".header");

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

  // Menu Hover Header
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
      //links[i].addEventListener("click", (e) => e.preventDefault());
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

  // Menu Hover Top Navbar
  (function () {
    const target = document.querySelector(".target2");
    const links = document.querySelectorAll(
      ".top-header__links .top-header__link"
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
      const active = document.querySelector(".top-header__links li.active");
      if (active) {
        active.classList.remove("active");
      }
      target.style.width = "0";
    }

    for (let i = 0; i < links.length; i++) {
      //links[i].addEventListener("click", (e) => e.preventDefault());
      links[i].addEventListener("mouseenter", mouseenterFunc);
      links[i].addEventListener("mouseleave", mouseleaveFunc);
    }

    function resizeFunc() {
      const active = document.querySelector(".top-header__links li.active");

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
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
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

  const swiperReviewLogo = new Swiper(".review__logo-items", {
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 10,
    breakpoints: {
      350: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
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

  // Filter Button Sticky
  window.addEventListener("scroll", function () {
    var filterBtn = document.querySelector(".filter-btn");
    var filterBtnNav = document.querySelector(".product-category-nav-area");
    var filterBtnArea = document.querySelector(".all-products-area");

    if (filterBtn && filterBtnNav && filterBtnArea) {
      var filterBtnAreaTop = filterBtnArea.getBoundingClientRect().top;
      var filterBtnAreaHeight = filterBtnArea.offsetHeight;
      var filterBtnPosition = filterBtnNav.getBoundingClientRect().top;

      var windowHeight = window.innerHeight;

      var buffer = 50;
      if (filterBtnAreaTop + filterBtnAreaHeight < windowHeight + buffer) {
        filterBtn.classList.add("hidden");
      } else {
        filterBtn.classList.remove("hidden");
      }

      if (filterBtnPosition + windowHeight < windowHeight) {
        filterBtn.classList.add("filter-btn--sticky");
      } else {
        filterBtn.classList.remove("filter-btn--sticky");
      }
    }
  });

  // Function to open a specific modal and close all other modals
  function openModal(modalId) {
    var modals = document.querySelectorAll(".modal");
    for (var i = 0; i < modals.length; i++) {
      modals[i].classList.remove("filter-sidebar--open");
    }
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("filter-sidebar--open");
    }
  }

  window.closeAllModals = function () {
    var modals = document.querySelectorAll(".modal");
    for (var i = 0; i < modals.length; i++) {
      modals[i].classList.remove("filter-sidebar--open");
    }
  };

  document.addEventListener("mouseup", function (e) {
    var modals = document.querySelectorAll(".modal");
    for (var i = 0; i < modals.length; i++) {
      if (e.target === modals[i]) {
        window.closeAllModals();
        break;
      }
    }
  });

  var openModalBtnLogin = document.getElementById("openModalBtnLogin");
  if (openModalBtnLogin) {
    openModalBtnLogin.addEventListener("click", function () {
      openModal("modalLogin");
    });
  }

  var openModalBtnRegister = document.getElementById("openModalBtnRegister");
  if (openModalBtnRegister) {
    openModalBtnRegister.addEventListener("click", function () {
      openModal("modalRegister");
    });
  }

  var openModalBtnFilter = document.getElementById("openModalBtnFilter");
  if (openModalBtnFilter) {
    openModalBtnFilter.addEventListener("click", function () {
      openModal("modalFilter");
    });
  }

  // Change Product Layout
  const productSelectLayout = document.getElementById("productSelectLayout");
  const allProductLayoutArea = document.getElementById("allProducts");

  if (productSelectLayout && allProductLayoutArea) {
    productSelectLayout.addEventListener("change", function () {
      if (this.value === "secondary-product") {
        allProductLayoutArea.classList.add(
          "all-products-area--secondary-layout"
        );
      } else if (this.value === "default-product") {
        allProductLayoutArea.classList.remove(
          "all-products-area--secondary-layout"
        );
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Product Description text show
  const productMaandMoreTextPlus = document.querySelector(
    ".products__item--maand .products__maand-more-text--plus"
  );
  const productMaandMoreTextMinus = document.querySelector(
    ".products__item--maand .products__maand-more-text--minus"
  );
  const productMaandContent = document.querySelector(
    ".products__item--maand .products__maand-right"
  );

  if (
    productMaandMoreTextPlus &&
    productMaandMoreTextMinus &&
    productMaandContent
  ) {
    productMaandMoreTextPlus.addEventListener("click", () => {
      productMaandContent.classList.add("products__maand-right--show");
    });

    productMaandMoreTextMinus.addEventListener("click", () => {
      productMaandContent.classList.remove("products__maand-right--show");
    });
  }
});

// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const productMaandSkinMoreTextPlus = document.querySelector(
    ".more-text-content .products__maand-more-text--plus"
  );
  const productMaandSkinMoreTextMinus = document.querySelector(
    ".more-text-content .products__maand-more-text--minus"
  );
  const productMaandSkinContent = document.querySelector(
    ".more-text-content .products__maand-right"
  );

  if (
    productMaandSkinMoreTextPlus &&
    productMaandSkinMoreTextMinus &&
    productMaandSkinContent
  ) {
    productMaandSkinMoreTextPlus.addEventListener("click", () => {
      productMaandSkinContent.classList.add("products__maand-right--show");
    });

    productMaandSkinMoreTextMinus.addEventListener("click", () => {
      productMaandSkinContent.classList.remove("products__maand-right--show");
    });
  }
});

// Zorgchecker Form Step
const zorgcheckerSteps = document.querySelectorAll(".zorgcheck__step");
const zorgcheckerContents = document.querySelectorAll(
  ".zorgcheck-step__content"
);
const zorgcheckerSuccessContent = document.querySelector(".vergoed-area");
const zorgcheckStepsContainer = document.querySelector(".zorgcheck");

function initSteps() {
  zorgcheckerSteps[0].classList.add("zorgcheck__step--active");
  zorgcheckerContents[0].classList.add("zorgcheck-step__content--active");
}

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

  zorgcheckStepsContainer.scrollIntoView({ behavior: "smooth" });
}

function handleAllStepsCompleted() {
  const isStep4Completed = zorgcheckerSteps[3].classList.contains(
    "zorgcheck__step--completed"
  );
  if (zorgcheckerSuccessContent) {
    if (isStep4Completed) {
      zorgcheckerSuccessContent.classList.remove("hidden");
      zorgcheckerSteps.forEach((step) =>
        step.classList.remove("zorgcheck__step--active")
      ); // Remove active class from all steps after completion
    } else {
      zorgcheckerSuccessContent.classList.add("hidden");
    }
  }
}

function handleStepIndicators(clickedIndex) {
  zorgcheckerSteps.forEach((step, index) => {
    step.classList.remove(
      "zorgcheck__step--active",
      "zorgcheck__step--completed"
    );
    if (index < clickedIndex) {
      step.classList.add("zorgcheck__step--completed");
    } else {
      step.classList.remove("zorgcheck__step--completed"); // Remove completed class from subsequent steps
    }
    step.classList.toggle("zorgcheck__step--active", index === clickedIndex);
  });

  handleAllStepsCompleted();
}

zorgcheckerContents.forEach((content, index) => {
  const radioButtons = content.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      moveToNextStep(index);
      handleStepIndicators(index + 1);
    });
  });

  if (index === 1) {
    const step2Button = content.querySelector(".custom-btn--birth");
    if (step2Button) {
      step2Button.addEventListener("click", () => {
        moveToNextStep(index);
        handleStepIndicators(index + 1);
      });
    }
  }
  if (index === 2) {
    const step3Button = content.querySelector("#step3_button");
    if (step3Button) {
      step3Button.addEventListener("click", () => {
        moveToNextStep(index);
        handleStepIndicators(index + 1);
      });
    }
  }
});

zorgcheckerSteps.forEach((step, index) => {
  step.addEventListener("click", () => {
    zorgcheckerContents.forEach((c) =>
      c.classList.remove("zorgcheck-step__content--active")
    );
    zorgcheckerContents[index].classList.add("zorgcheck-step__content--active");
    handleStepIndicators(index);
  });
});

document.addEventListener("DOMContentLoaded", initSteps);

document.addEventListener("DOMContentLoaded", function () {
  // Show Password text
  var toggleLoginPassword = document.querySelector(".password__eye--login");
  var loginPasswordField = document.querySelector(
    ".input-style--password-login"
  );

  var toggleRegisterPassword = document.querySelector(
    ".password__eye--register"
  );
  var registerPasswordField = document.querySelector(
    ".input-style--password-register"
  );

  if (toggleLoginPassword && loginPasswordField) {
    toggleLoginPassword.addEventListener("click", function () {
      togglePasswordVisibility(loginPasswordField);
    });
  }

  if (toggleRegisterPassword && registerPasswordField) {
    toggleRegisterPassword.addEventListener("click", function () {
      togglePasswordVisibility(registerPasswordField);
    });
  }

  function togglePasswordVisibility(passwordField) {
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }

  // Function to format date input
  const leeftijdInput = document.getElementById("leeftijd");

  if (leeftijdInput) {
    leeftijdInput.addEventListener("input", function (e) {
      let inputValue = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters
      let cursorPosition = e.target.selectionStart; // Store the current cursor position

      // Handle empty input case
      if (inputValue === "") {
        e.target.value = "";
        return;
      }

      let formattedValue = "";
      let inputIndex = 0;

      for (let i = 0; i < 10; i++) {
        if (i === 2 || i === 5) {
          formattedValue += "-"; // Add hyphen at correct positions
        } else if (inputValue[inputIndex]) {
          formattedValue += inputValue[inputIndex++];
        } else {
          formattedValue += "_";
        }
      }

      e.target.value = formattedValue;
      cursorPosition = Math.min(cursorPosition, formattedValue.length);

      // Adjust cursor position if needed
      if (formattedValue[cursorPosition - 1] === "-") {
        cursorPosition++;
      }

      e.target.setSelectionRange(cursorPosition, cursorPosition);
    });

    leeftijdInput.addEventListener("keydown", function (e) {
      let currentValue = e.target.value;
      let cursorPosition = e.target.selectionStart;

      if (e.keyCode === 8) {
        // Backspace key
        if (window.getSelection().toString() === currentValue) {
          e.target.value = "";
          return;
        }

        e.preventDefault();

        if (cursorPosition > 0) {
          let index = cursorPosition - 1;

          // Skip over hyphens
          if (currentValue[index] === "-") {
            index--;
          }

          // Replace the last digit with "_"
          if (index >= 0 && !isNaN(currentValue[index])) {
            e.target.value =
              currentValue.slice(0, index) +
              "_" +
              currentValue.slice(index + 1);
            e.target.setSelectionRange(index, index);
          }
        }
      } else if (e.keyCode === 46) {
        // Delete key
        if (window.getSelection().toString() === currentValue) {
          e.target.value = "";
          return;
        }

        e.preventDefault();

        if (cursorPosition < currentValue.length) {
          let index = cursorPosition;

          // Skip over hyphens
          if (currentValue[index] === "-") {
            index++;
          }

          // Replace the next digit with "_"
          if (index < currentValue.length && !isNaN(currentValue[index])) {
            e.target.value =
              currentValue.slice(0, index) +
              "_" +
              currentValue.slice(index + 1);
            e.target.setSelectionRange(cursorPosition, cursorPosition);
          }
        }
      }
    });
  }
});

// Tabs Effect
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("custom__tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("custom__tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

const defaultOpen = document.getElementById("defaultOpen");
if (defaultOpen) {
  defaultOpen.click();
}

// Upload CV
const realFileBtn = document.getElementById("real-file");
const customUploadBtn = document.getElementById("customUploadButton");
const customUploadFile = document.getElementById("customUploadFile");

if (realFileBtn && customUploadBtn && customUploadFile) {
  customUploadBtn.addEventListener("click", function () {
    realFileBtn.click();
  });

  realFileBtn.addEventListener("change", function () {
    if (realFileBtn.value) {
      customUploadFile.innerHTML = realFileBtn.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1];
    } else {
      customUploadFile.innerHTML = "No file chosen, yet.";
    }
  });
}
