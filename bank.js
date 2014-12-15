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
  var money = new Money();
  var controller = new Controller(view, pin, money);
  $('.ATMOptions').hide();
  $('.back').hide();
  controller.bindListeners();
})


function Controller(view, pin, money){
  this.view = view;
  this.pin = pin;
  this.money = money;
}


Controller.prototype = {
  bindListeners: function(){
    this.view.pinForm.on('submit', this.showMessage.bind(this));
    this.view.withdrawal.on('click', this.withdrawMoney.bind(this));
    this.view.balance.on('click', this.balanceMoney.bind(this));
    this.view.deposit.on('click', this.depositMoney.bind(this));
    this.view.back.on('click', this.takeBack.bind(this));
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
    alert("You've successfully withdrawn money");
  },

  takeBack: function(){
    this.view.optionsPage();
  },

  balanceMoney: function(){
    this.view.showBalance(this.money.account);
  },

  depositMoney: function(){
    alert("You've successfully deposited money!");
  }
};


////////////MODEL///////////////////////////////////////////

function Pin(){
  this.pinValue = "1234"; 
}

function Money(){
  this.account = 0;
}

Money.prototype = {
  makeWithdrawal: function(value){
    var total = this.account + value;
  }
}



///////////VIEW//////////////////////////////////////////////

function View(){
  this.pinForm = $("#pinForm");
  this.pinInput = $("input#pinput");
  this.withdrawal = $(".withdrawal");
  this.balance = $(".balance");
  this.deposit = $(".deposit");
  this.back = $(".back");
}

View.prototype = {
  inCorrectMessage: function(){
    $(".message").html("Incorrect PIN. Please Try Again");
    $('#pinput').css('border-color', 'red');
  },

  optionsPage: function(){
    $('.pin').hide();
    $(".message").hide();
    $('.ATMOptions').show();
    $('.back').hide()
  },

  showBalance: function(account){
    $('.ATMOptions').hide();
    $('.balancediv').show();
    $('.balancediv').next('.back');
    $('.balancediv').html("Your current balance is " + account);
  }
}















