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
  
  showMessage: function(){
    if(this.pin.pinValue === this.view.pinInput){
      alert('Correct PIN. Please Proceed');
    } else {
      alert('Incorrect PIN. Do Not Enter');
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















