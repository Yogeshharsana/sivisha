'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// ===============
// Initialize EmailJS
(function() {
  emailjs.init("3Yz7pv2r1z0LRGMje"); // Replace with your actual EmailJS User ID
})();

// Define the sendMessage function
function sendMessage() {
  // Get the form element
  const form = document.getElementById('contact-form');

  // Send form data using EmailJS
  emailjs.sendForm('service_tmqlfgm', 'template_pyekqlm', form)
    .then(function(response) {
      alert('Message sent successfully!');
      form.reset(); // Reset the form after a successful submission
    }, function(error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again later.');
    });
}
