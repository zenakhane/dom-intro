var itemTypeRadio = document.querySelector(".billItemTypeRadio")
// get a reference to the sms or call radio buttons
var radioAddBtn = document.querySelector(".radioBillAddBtn")
//get a reference to the add button
var totalCallsElement = document.querySelector(".callTotalTwo")
var totalSmsElement = document.querySelector(".smsTotalTwo")
var radioTotal = document.querySelector(".totalTwo")
var randCol = document.querySelector(".orange")
//create a variable that will keep track of the total bill
var totalCalls = 0;
var totalSms = 0;
var costTotal = 0

function radioButtonBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value.trim()
        if (billItemType === "call"){
            totalCalls += 2.75;
            costTotal += 2.75;
        }
        else if (billItemType === "sms"){
            totalSms += 0.75;
            costTotal += 0.75;
        }
        if ( costTotal >= 20 && costTotal < 30){
            // adding the danger class will make the text red
            radioTotal.classList.add("warning");
            randCol.classList.add("warning");
        }
        else if (costTotal >= 30){
            radioTotal.classList.remove("warning");
            randCol.classList.remove("warning");
            radioTotal.classList.add("danger");
            randCol.classList.add("danger");
            
        }
    }
    // update the correct total
    
    //update the totals that is displayed on the screen.
    totalCallsElement.innerHTML = totalCalls.toFixed(2);
    totalSmsElement.innerHTML = totalSms.toFixed(2);
    radioTotal.innerHTML = costTotal.toFixed(2);
     console.log(totalCalls)
     console.log(totalSms)
    console.log(radioTotal)

}
radioAddBtn.addEventListener('click', radioButtonBill);



