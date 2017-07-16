
(function(){

  var teamContainer = document.querySelector('.js-team');
  var team = document.querySelector('.index-team__employees');
  
  var width = 0;
  var duration = 25 * width;
  var state = 'fwd'; // rev


  var dupes = [];
  var employees = [].slice.call(document.querySelectorAll('.index-team__employee'));
  employees.forEach(function(employee) {
    var dupe = employee.cloneNode(true);
    var dupe2 = employee.cloneNode(true);
    employee.remove();
    dupes.push(dupe);
    dupes.push(dupe2);
    // dupes.push(dupe);
  });

  shuffle(dupes);

  dupes.forEach(function(dupe, i){
    if (i % 3 === 0) {
      dupe.style.transform = 'scale('+ randomRange(1.0, 1.0) +') translateX('+ (i) * 60 +'px) translateY('+ 130 +'px)';
    } else if (i % 3 === 1){
      dupe.style.transform = 'scale('+ randomRange(1.0, 1.0) +') translateX('+ (i) * 60 +'px) translateY('+ 260 +'px)';
    } else {
      dupe.style.transform = 'scale('+ randomRange(1.0, 1.0) +') translateX('+ (i) * 60 +'px) translateY('+ 0 +'px)'
    }

    if (i === dupes.length - 1) {
      width = i * 60 + 180 - window.innerWidth;
      duration =  width * 35;
      console.log('Duration: ' + duration);
    }


    team.appendChild(dupe);
    dupe.addEventListener('mouseover', function() {
      animate.stop(teamContainer);
    });
    dupe.addEventListener('mouseout', function() {
      var xTransform = teamContainer.style.transform;
      var xPos = parseNumber(xTransform);
        
      var dir;
      var func;
      var tempDuration;

      if (state === 'fwd') {
        dir = -width;
        func = reverse;
        var percent = Math.abs(xPos / width);
        tempDuration = (1 - percent) * duration;
      } else {
        dir = 0;
        func = forward;
        var percent = Math.abs(xPos / width);
        tempDuration = (percent) * duration;
      }
  


      animate({
        el: teamContainer,
        translateX: [xPos, dir],
        easing: 'linear',
        duration: tempDuration,
        complete: func
      });

    })
  });


  function forward() {
    state = 'fwd'
    animate({
      el: teamContainer,
      translateX: [0, -width],
      easing: 'linear',
      duration: duration,
      complete: reverse
    }); 
  }
  
  function reverse() {
    state = 'rev'
    animate({
      el: teamContainer,
      translateX: [-width, 0],
      easing: 'linear',
      duration: duration,
      complete: forward
    }); 
  }

  setTimeout(function(){
    state = 'fwd'
    animate({
      el: teamContainer,
      translateX: [0, -width],
      easing: 'linear',
      duration: duration,
      complete: reverse
    }); 
  }, 800);







  // Helpers ------------------------------------

  function randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function removeActive(elements) {
    elements.forEach(function(el) { el.classList.remove('is-active'); });
  }

  function addActive(elements) {
    elements.forEach(function(el) { el.classList.add('is-active'); });
  }

  function parseNumber(str) {
    var regex = /[+-]?\d+(\.\d+)?/g;
    var floats = str.match(regex).map(function(v) { return parseFloat(v); });
    return floats[0];
  }


})();