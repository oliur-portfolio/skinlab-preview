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
  slidesToShow: 3.5,
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
