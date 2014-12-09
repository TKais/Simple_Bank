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
  $('.ATMOptions').hide();
  controller.bindListeners();
})


function Controller(view, pin){
  this.view = view;
  this.pin = pin;
  this.account = 0;
}


Controller.prototype = {
  bindListeners: function(){
    this.view.pinForm.on('submit', this.showMessage.bind(this));
    this.view.withdrawal.on('click', this.withdrawMoney.bind(this));
    this.view.balance.on('click', this.balanceMoney.bind(this));
    this.view.deposit.on('click', this.depositMoney.bind(this));
  },
  
  showMessage: function(e){
    e.preventDefault();
    if(this.pin.pinValue === this.view.pinInput[0].value){
      this.view.optionsPage();
    } else {
      this.view.inCorrectMessage();
    }
  },

  withdrawMoney: function(){
    alert("You've successfully taken money!");
  },

  balanceMoney: function(){
    this.view.showBalance(this.account);
  },

  depositMoney: function(){
    alert("You've successfully deposited money!");
  }
};


////////////MODEL///////////////////////////////////////////

function Pin(){
  this.pinValue = "1234"; 
}




///////////VIEW//////////////////////////////////////////////

function View(){
  this.pinForm = $("#pinForm");
  this.pinInput = $("input#pinput");
  this.withdrawal = $(".withdrawal");
  this.balance = $(".balance");
  this.deposit = $(".deposit");
}

View.prototype = {
  correctMessage: function(){
    $(".message").html("Correct PIN. Please Proceed");
    $('#pinput').css('border-color', 'green');
  },

  inCorrectMessage: function(){
    $(".message").html("Incorrect PIN. Please Try Again");
    $('#pinput').css('border-color', 'red');
  },

  optionsPage: function(){
    $('.pin').hide();
    $(".message").hide();
    $('.ATMOptions').show();
  },

  showBalance: function(){
    $('.ATMOptions').hide();
    $('.balancediv').show();
    $('.balancediv').html("Your current balance is " + this.account);
  }
}















