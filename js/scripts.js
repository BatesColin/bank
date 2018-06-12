function Account(name, initialDeposit) {
  this.name = name;
  this.initialDeposit = initialDeposit;
}
var newAccount;
Account.prototype.modifier = function (modifyDeposit, modifyWithdraw) {
  console.log(modifyDeposit);
  console.log(modifyWithdraw);
  newAccount.initialDeposit += (modifyDeposit - modifyWithdraw);
  return (newAccount.initialDeposit);
}

// Account.prototype.withdraw = function () {
//   return this.initialDeposit - this.newWithdraw;
// }
$(document).ready(function() {
  $("form#register").submit(function(event) {
    event.preventDefault();
    //debugger;
    var inputtedName = $("input#name-input").val();
    var inputtedInitial = parseInt($("input#initial-input").val());
    newAccount = new Account(inputtedName, inputtedInitial);


    $("#typeDeposit").text(newAccount.initialDeposit);

      //$("form#modify").submit(function(event) {

  });
  $("form#modify").submit(function(event){
    event.preventDefault();
    //debugger;
    var modifyDeposit = parseInt($("input#newDeposit").val());
    var modifyWithdraw = parseInt($("input#newWithdraw").val());
    newAccount.modifier(modifyDeposit, modifyWithdraw);
    $("#typeDeposit").text(newAccount.initialDeposit);

  });

});
