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
    if(this.pin.pinValue === this.view.pinInput){
      this.view.correctMessage();
    } else {
      this.view.inCorrectMessage();
    }
  }
}


////////////MODEL///////////////////////////////////////////

function Pin(){
  this.pinValue = 1234;
}




///////////VIEW//////////////////////////////////////////////

function View(){
  this.pinForm = $("#pinForm");
  this.pinInput = $('#pin').val();
}

View.prototype = {
  correctMessage: function(){
    $(".message").text("Correct PIN. Please Proceed");
  },

  inCorrectMessage: function(){
    $(".message").text("Incorrect PIN. Please Try Again");
  }
}















