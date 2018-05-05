'use strict';
(function () {
  var toggler = document.querySelector('.main-nav__toggle');
  var nav = document.querySelector('.main-nav');

  nav.classList.remove('main-nav--nojs');

  toggler.addEventListener('click', function() {
    if (nav.classList.contains('main-nav--open')) {
      nav.classList.remove('main-nav--open');
      nav.classList.add('main-nav--close');
    } else {
      nav.classList.add('main-nav--open');
      nav.classList.remove('main-nav--close');
    }
  });

}());
