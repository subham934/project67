// nav toggler

function nav() {
  const navToggler = document.querySelector(".js-header-toggler");
  const nav = document.querySelector(".js-header-nav");

  navToggler.addEventListener("click", toggleNav);

  function toggleNav() {
    navToggler.classList.toggle("active");
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", toggleNav);
  });
}

nav();

// video popup

function video() {
  const btns = [".js-video-popup-close", ".js-about-play-btn"];

  const popup = document.querySelector(".js-video-popup");

  const iframe = popup.querySelector(".js-video-popup-iframe");

  const src = iframe.src;

  btns.forEach((btn) => {
    document.querySelector(btn).addEventListener("click", () => {
      if (popup.classList.contains("open")) {
        popup.classList.remove("open");
        iframe.src = "";
      } else {
        popup.classList.add("open");
        if (iframe.getAttribute("src") == "") {
          iframe.src = src;
        }
      }
    });
  });
}

video();

/*accordion*/

function accordion(ele) {
  const accordion = document.querySelector(ele);

  accordion.addEventListener("click", ({ target }) => {
    if (!target.closest(".js-accordion-btn")) {
      return;
    }
    const btn = target.closest(".js-accordion-btn");
    const item = btn.parentElement.parentElement;
    const body = btn.parentElement.nextElementSibling;

    if(target.closest('.active')){
      slideUp();
      return;
    }

    if (accordion.querySelector(".active")) {
      slideUp();
    }

    item.classList.add("active");
    body.style.height = body.scrollHeight + "px";

    function slideUp() {
      accordion.querySelector(".active").lastElementChild.style.height = "0";
      accordion.querySelector(".active").classList.remove("active");
    }
  });
}

accordion(".js-accordion");
