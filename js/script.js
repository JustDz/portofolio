// Main Navbar & Page Animation
const navLinks = document.querySelectorAll("header nav a");
const logoLinks = document.querySelectorAll(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

const activePage = () => {
  const header = document.querySelector("header");
  const barsBox = document.querySelector(".bars-box");

  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  barsBox.classList.remove("active");
  setTimeout(() => {
    barsBox.classList.add("active");
  }, 1100);

  sections.forEach((section) => {
    section.classList.remove("active");
  });

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();
      link.classList.add("active");

      setTimeout(() => {
        sections[idx].classList.add("active");
      }, 1100);
    }
  });
});

// Event listener for logoLinks
logoLinks.forEach((logo) => {
  logo.addEventListener("click", () => {
    if (!navLinks[0].classList.contains("active")) {
      activePage();
      navLinks[0].classList.add("active");

      setTimeout(() => {
        sections[0].classList.add("active");
      }, 1100);
    }
  });
});

// Type Home Event
const script = document.createElement("script");
script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
script.async = true; // Asynchronous untuk menghindari blocking
document.head.appendChild(script);

script.onload = () => {
  const options = {
    strings: ["a Frontend Developer", "a Unity Developer", "an AI Engineer"],
    typeSpeed: 150,
    backSpeed: 125,
    backDelay: 1000,
    loop: true,
  };

  const typed = new Typed("h2 .auto-type", options);
};

// Button Activation Event
const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume-detail");

    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});

// Project Navigation
const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);

let index = 0;

const totalSlides = document.querySelectorAll(
  ".portfolio-carousel .img-slide .img-item"
).length;
const maxIndex = totalSlides - 1;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");

  if (index === 0) {
    arrowLeft.classList.add("disabled");
  } else {
    arrowLeft.classList.remove("disabled");
  }

  if (index === maxIndex) {
    arrowRight.classList.add("disabled");
  } else {
    arrowRight.classList.remove("disabled");
  }
};

activePortfolio();

arrowRight.addEventListener("click", () => {
  if (index < maxIndex) {
    index++;
    activePortfolio();
  }
});

arrowLeft.addEventListener("click", () => {
  if (index > 0) {
    index--;
    activePortfolio();
  }
});
