'use strict';

const navBtn = document.getElementById('navBtn');
const hamburger = document.getElementById('hamburger');
navBtn.addEventListener('click', function () {
  hamburger.classList.toggle('isActive');
});
