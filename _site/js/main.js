(function(){


  var zooms = document.querySelectorAll('.header-index__zoom-mask' );


  var updown = document.querySelectorAll('.header-index__zoom-line.top, .header-index__zoom-line.bottom');
  var lines = document.querySelectorAll('.header-index__zoom-line .box');


  animate({
    el: '.header-index__zoom',
    // opacity: [0, 1],
    rotate: [45, 0],
    scale: [0.8, 1],
    duration: 600,
    delay: 1600,
    easing: 'easeOutQuad'
  });

  animate({
    el: zooms,
    opacity: [0, 1],
    duration: 600,
    delay: 2000,
    easing: 'easeOutQuad'
  });

  animate({
    el: lines,
    opacity: [1, 0.1],
    scaleX: [1, 0.2],
    scaleY: [1, 300],
    duration: 1000,
    delay: 2400,
    easing: 'easeOutQuad'
  });


  // -----------------------------------
  // Navigation
  // -----------------------------------


})();