(function(){

  var mobileButton = document.querySelector('.js-mobile-button');
  var mobileMenu = document.querySelector('.js-mobile-menu');

  var setState = function() {
    mobileMenu.classList.toggle('active');
  }

  mobileButton.addEventListener('click', setState);


})();