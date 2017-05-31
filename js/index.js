
(function(){

  var team = document.querySelector('.index-team__employees');

  var dupes = [];
  var employees = [].slice.call(document.querySelectorAll('.index-team__employee'));
  employees.forEach(function(employee) {
    var dupe = employee.cloneNode(true);
    employee.remove();
    dupes.push(dupe);
  });

  shuffle(dupes);

  dupes.forEach(function(dupe){
    dupe.style.transform = 'scale('+ randomRange(0.6, 1.2) +') translateX('+ randomRange(-15, 15) +'px)';
    team.appendChild(dupe);
  });
  



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


})();