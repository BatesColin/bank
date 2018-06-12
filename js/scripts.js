function Account(name, initialDeposit) {
  this.name = name;
  this.initialDeposit = initialDeposit;
}
var newAccount;
Account.prototype.modifier = function (modifyDeposit, modifyWithdraw) {
  newAccount.initialDeposit += (modifyDeposit - modifyWithdraw);
  return (newAccount.initialDeposit);
}
$(document).ready(function() {
  $("form#register").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name-input").val();
    var inputtedInitial = parseInt($("input#initial-input").val());
    newAccount = new Account(inputtedName, inputtedInitial);
    $("#typeDeposit").text(newAccount.initialDeposit);
  });
  $("form#modify").submit(function(event){
    event.preventDefault();
    var modifyDeposit = parseInt($("input#newDeposit").val());
    var modifyWithdraw = parseInt($("input#newWithdraw").val());
    newAccount.modifier(modifyDeposit, modifyWithdraw);
    $("#typeDeposit").text(newAccount.initialDeposit);
  });
});
