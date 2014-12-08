$(document).ready(function(){
  $("#pinForm").submit(function(){
    var pinInput = $('#pin').val();
    if(pinInput == 2242){
      alert('Correct PIN');
    } else {
      alert('Incorrect PIN');
    }
  })
});