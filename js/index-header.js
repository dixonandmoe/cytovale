if (document.querySelector('.index') !== null) {

  var zooms = document.querySelectorAll('.header-index__zoom-mask' );
  var updown = document.querySelectorAll('.header-index__zoom-line.top, .header-index__zoom-line.bottom');
  var lines = document.querySelectorAll('.header-index__zoom-line .box');
  var dots = document.querySelector('.header-index__diagram-background');

  var cells = document.querySelector('.header-index__cells');
  var zoom = document.querySelector('.header-index__zoom-mask');
  var flow = document.querySelector('.header-index__zoom-flow');
  var crvs = document.querySelector('.header-index__zoom-curves');
  var angle = document.querySelector('.header-index__zoom-angle');
  var measure = document.querySelector('.header-index__zoom-measure');

  var morph = document.querySelector('.js-morph');
  var molecule = document.querySelector('.js-molecule');
  var captions = document.querySelectorAll('.js-caption');

  var removeCell = function(obj) {
    setTimeout(function(){
      obj[0].parentNode.removeChild(obj[0]);
    }, 100)
  };

  var fadeOut = function(obj) {
    animate({
      el: obj,
      opacity: [1, 0],
      easing: 'easeOutQuad'
    })
  };


  var Cell = function(position, start) {
    var time = 15000;
    var duration = start ? (time / 5) * start : time;
    var opacity = (position + 10) / 100;

    var cell = document.createElement('div');
    cell.classList.add('header-index__cell');
    cell.style.transform = 'translateX('+ position +'vw)';
    cell.style.opacity = opacity;

    var img = document.createElement('img');
    img.src = '/img/cell.svg'; 

    cell.appendChild(img);

    cells.appendChild(cell);
    animate({
      el: img,
      rotate: [0, 360],
      easing: 'easeInOutQuad',
      duration: duration
    });
    animate({
      el: cell,
      translateX: [position, '80vw'],
      opacity: [opacity, 1],
      easing: 'linear',
      duration: duration,
      complete: removeCell
    });
  };


  var Zoom = function() {
    var cell = document.createElement('div');
    cell.classList.add('header-index__zoom-cell');

    var img = document.createElement('img');
    img.src = '/img/cell-squeezed.svg'; 

    cell.appendChild(img);

    zoom.appendChild(cell);

    animate({
      el: img,
      scaleY: [0.1, 1],
      scaleX: [1.2, 1],
      opacity: [0, 1],
      easing: 'easeOutBack',
      duration: 800
    });

    animate({
      el: angle,
      scaleY: [0.8, 1],
      opacity: [0, 1],
      delay: 500,
      duration: 800,
      easing: 'easeOutQuad',
      complete: fadeOut
    });

    animate({
      el: measure,
      scaleY: [0.8, 1],
      opacity: [0, 1],
      delay: 2000,
      duration: 800,
      easing: 'easeOutQuad',
      complete: fadeOut
    });

    animate({
      el: cell,
      opacity: [1, 0],
      delay: 3000,
      duration: 300,
      easing: 'easeOutQuad',
    });

    setTimeout(function(){
      removeCell([cell])
    }, 3400);
  };


  var startFlow = function(){
    var cell = new Cell(1);
    var cell = new Cell(20, 4);
    var cell = new Cell(40, 3);
    var cell = new Cell(60, 2);

    // line of cells
    setInterval(function() {
      if ( window.blurred ) { return; }    
      var cell = new Cell(0);
    }, 3800);

    // line of cells
    setInterval(function(){
      var cell = new Cell(0);
    }, 3800);

    // zoomed cell
    setTimeout(function(){
      var z = new Zoom();
      setInterval(function(){
        if ( window.blurred ) { return; }
        var zoom = new Zoom();    
      }, 3800);
    }, 1300);  


    captions[0].classList.add('active');
    setTimeout(function(){captions[1].classList.add('active')}, 300);
  };


  // When browser tab isn't focused, stop animating
  window.onblur = function() { window.blurred = true; };
  window.onfocus = function() { window.blurred = false; };

  // -----------------------------------
  // Animations
  // -----------------------------------

  animate({
    el: '.header-index__zoom',
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
    el: dots,
    opacity: [0, 1],
    duration: 1000,
    delay: 2600,
    easing: 'easeOutQuad',
  });

  animate({
    el: lines,
    opacity: [1, 0.1],
    scaleX: [1, 0.2],
    scaleY: [1, 300],
    duration: 1000,
    delay: 2400,
    easing: 'easeOutQuad',
    complete: startFlow
  });

  animate({
    el: cells,
    opacity: [0, 1],
    duration: 1000,
    delay: 4000,
    easing: 'easeOutQuad'
  });


  animate({
    el: flow,
    opacity: [0, 1],
    duration: 1000,
    delay: 2800,
    easing: 'easeOutQuad'
  });

  animate({
    el: crvs,
    opacity: [0, 1],
    duration: 1000,
    delay: 2800,
    easing: 'easeOutQuad'
  });


}