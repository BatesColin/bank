function Account(name, initialDeposit) {
  this.name = name;
  this.initialDeposit = initialDeposit;
}

Account.prototype.deposit = function () {
  return this.initialDeposit + this.newDeposit;
};

Account.prototype.withdraw = function () {
  return this.initialDeposit - this.newWithdraw;
};
$(document).ready(function() {
  $("form#register").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedInitial = $("input#initialDeposit").val();
    var newAccount = new Account(inputtedInitial, inputtedName);

    $(".contact").last().click(function(){
      $("#show-balance").show();
      $(".typeDeposit").text(newAccount.inputtedInitial);
    }

  $("form#modify").submit(function(event) {
    event.preventDefault();
