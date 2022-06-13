$(document).ready(function () {
  //Owl
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    // navText: ["PREV", "NEXT"],
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    smartSpeed: 1000,
    autoplay: false,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });
  $(".our-team").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".projects-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    dots: false,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".reviews-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    items: 1,
    margin: 40,
    autoplay: false,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  // back to top

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 0);
    return false;
  });
});

$(document).ready(function () {
  var dropdown = $(".search-dropdown");
  var toogleBtn = $(".search-dropdown .dropdown-toggle");

  // Toggle search and close icon for search dropdown
  dropdown.on("show.bs.dropdown", function (e) {
    toogleBtn.toggleClass("d-none");
  });
  dropdown.on("hide.bs.dropdown", function (e) {
    toogleBtn.addClass("d-none");
    toogleBtn.first().removeClass("d-none");
  });
});

// === Loader ===
// === Pop Up on Load ===

// === header Fix on scroll
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      document.getElementById("header").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("header").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
// DOMContentLoaded  end

// countDown();

// setInterval(countDown, 1000);

// Scroll Back To Top
// function scrollTopBack() {
//   let scrollTopButton = document.querySelector("#scrollUp");
//   window.onscroll = function () {
//     var scroll = document.documentElement.scrollTop;
//     if (scroll >= 250) {
//       scrollTopButton.classList.add("scrollActive");
//     } else {
//       scrollTopButton.classList.remove("scrollActive");
//     }
//   };
// }
// scrollTopBack();

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
