var itemTypeRadio = document.querySelector(".billItemTypeRadio")
// get a reference to the sms or call radio buttons
var radioAddBtn = document.querySelector(".radionBillAddBtn")
//get a reference to the add button
var radioTotal = document.querySelector(".totalTwo")
//create a variable that will keep track of the total bill
radioAddBtn.addEventListener('click', radioButtonBill)
//add an event listener for when the add button is pressed
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
}
function radionBillAddBtn(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
}
}
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
