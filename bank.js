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
    this.view.back.on('click');
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
    var takeOut = prompt("How much would you like to withdraw?");
    var calculate = this.money.makeWithdrawal(takeOut);
    this.view.showWithdrawal(takeOut, calculate);
  },

  takeBack: function(){
    this.view.optionsPage();
  },

  balanceMoney: function(){
    this.view.showBalance(this.money.account);
  },

  depositMoney: function(){
    var amount = prompt("How much would you like to deposit?");
    var makeCalculation = this.money.makeDeposit(amount);
    this.view.showDeposit(amount, makeCalculation);
  }
};


////////////MODEL///////////////////////////////////////////

function Pin(){
  this.pinValue = "1234"; 
}

function Money(){
  this.account = 100;
}

Money.prototype = {
  makeWithdrawal: function(takeOut){
    var subtract = this.account - takeOut;
    return subtract;
  },

  makeDeposit: function(amount){
    var add = this.account + parseInt(amount, 10);
    return add;
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
    $('.balancediv').html("Your current balance is $" + account);
  },

  showDeposit: function(amount, makeCalculation){
    $('.ATMOptions').hide();
    $('.depositdiv').show();
    $('.depositdiv').html("You have deposited $" + amount + " into your account. Your account balance is now $" + makeCalculation);
  },

  showWithdrawal: function(takeOut, calculate){
    $('.ATMOptions').hide();
    $('.withdrawdiv').show();
    $('.withdrawdiv').html("You have withdrawn $" + takeOut + " from your account. Your account balance is now $" + calculate);
  }
}















