function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}

// The function should bind the load event that adds the class tasty to the image to add a red frame to the image.

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

// The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

// The function should bind a submit event to the form that alerts "Your form is going to be submitted now.".

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here

});
