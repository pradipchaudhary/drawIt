$(document).ready(function () {
  // Pre Loading ...
  setTimeout(function () {
    $("body").addClass("loaded");
  }, 1000);

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

  // Our team 
  $(".our-team").owlCarousel({
    loop: true,
    margin: 20,
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

  // Porject Slider 
  $(".projects-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    dots: false,
    smartSpeed: 600,
    center: true,
    autoplay: false,
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

  //  Reviews Slider 
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
  var searchBox = $(".search-dropdown .dropdown-menu");

  // Toggle search and close icon for search dropdown
  $("#open").click(function (e) {
    console.log(1);
    toogleBtn.toggleClass("d-none");
    searchBox.addClass("show");
  });

  $("#close").click(function (e) {
    console.log(2);
    toogleBtn.addClass("d-none");
    toogleBtn.first().removeClass("d-none");
    searchBox.removeClass("show");
  });
});


$(function() {
  function count($this){
      var current = parseInt($this.html(), 10);
      current = current + 50; /* Where 50 is increment */

  $this.html(++current);
  if(current > $this.data('count')){
      $this.html($this.data('count'));
  } else {    
      setTimeout(function(){count($this)}, 5);
  }
}        

$(".stat-count").each(function() {
$(this).data('count', parseInt($(this).html(), 10));
$(this).html('0');
count($(this));
});

});


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

// === Counter
// counter design
// document.addEventListener("DOMContentLoaded", () => {
//   function counter(id, start, end, duration) {
//     let obj = document.getElementById(id),
//       current = start,
//       range = end - start,
//       increment = end > start ? 1 : -1,
//       step = Math.abs(Math.floor(duration / range)),
//       timer = setInterval(() => {
//         current += increment;
//         obj.textContent = current;
//         if (current == end) {
//           clearInterval(timer);
//         }
//       }, step);
//   }
//   counter("count1", 0, 1287, 3000);
//   counter("count2", 0, 500, 2500);
//   counter("count3", 0, 30, 3000);
// });
