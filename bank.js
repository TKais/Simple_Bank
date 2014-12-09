/////////////////PROCEDURAL///////////////////////////////

// $(document).ready(function(){
//   $("#pinForm").submit(function(){
//     var pinInput = $('#pin').val();
//     if(pinInput == 2242){
//       alert('Correct PIN');
//     } else {
//       alert('Incorrect PIN');
//     }
//   })
// });



/////////////CONTROLLER///////////////////////////////////

$(document).ready(function(){
  var view = new View();
  var pin = new Pin();
  var controller = new Controller(view, pin);
  controller.bindListeners();
})


function Controller(view, pin){
  this.view = view;
  this.pin = pin;
}


Controller.prototype = {
  bindListeners: function(){
    this.view.pinForm.on('submit', this.showMessage.bind(this));
  },
  
  showMessage: function(e){
    e.preventDefault();
    if(this.pin.pinValue === this.view.pinInput[0].value){
      this.view.correctMessage();
    } else {
      this.view.inCorrectMessage();
    }
  }
}


////////////MODEL///////////////////////////////////////////

function Pin(){
  this.pinValue = "1234"; 
}




///////////VIEW//////////////////////////////////////////////

function View(){
  this.pinForm = $("#pinForm");
  this.pinInput = $("input#pinput");
}

View.prototype = {
  correctMessage: function(){
    $(".message").html("Correct PIN. Please Proceed");
    $('#pinput').css('border-color', 'green');
  },

  inCorrectMessage: function(){
    $(".message").html("Incorrect PIN. Please Try Again");
    $('#pinput').css('border-color', 'red');
  }
}















