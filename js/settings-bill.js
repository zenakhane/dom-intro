 var billType = document.querySelector(".billItemTypeSettings")
// get a reference to the sms or call radio buttons

 var callsSettings = document.querySelector(".callCostSetting")
 var smsSettings = document.querySelector(".smsCostSetting")
 var warningSettings = document.querySelector(".warningLevelSetting")
var criticalSettings = document.querySelector(".criticalLevelSetting")
// get refences to all the settings fields

 var radioBillButton = document.querySelector(".radioBillAddBtn")
//get a reference to the add button

var radioUpdateButton = document.querySelector(".updateSettings")
//get a reference to the 'Update settings' button

var callSettingTotal = document.querySelector(".callTotalSettings")
var smsSettingTotal = document.querySelector(".smsTotalSettings")
var SettingTotal = document.querySelector(".totalSettings")
// settings total

var radioSettings = 0
// create a variables that will keep track of all the settings

var callsTotal = 0
var smsTotal = 0
var radioTotal = 0
// create a variables that will keep track of all three totals.

function billSetting(){
    var setCall = callsSettings.value;
    var setSms = smsSettings.value;
    var setWarning = warningSettings.value;
    var setCritical = criticalSettings.value;

}
radioUpdateButton.addEventListener('click', billSetting)


function billSetting(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billType = checkedRadioBtn.value.trim()
        if (billType === "call"){
            callsSettings += 2.75;
            radioTotal += 2.75;
        }
        else if (billItemType === "sms"){
            smsSettings += 0.75;
            radioTotal += 0.75;
        }
        if ( radioTotal >= 20 && costTotal < 30){
            // adding the danger class will make the text red
            radioTotal.classList.add("warning");
            // randCol.classList.add("warning");
        }
        else if (radioTotal >= 30){
            radioTotal.classList.remove("warning");
            // randCol.classList.remove("warning");
            // radioTotal.classList.add("danger");
            // randCol.classList.add("danger");
            
        }
    }
    // update the correct total
    
    //update the totals that is displayed on the screen.
    totalCallsElement.innerHTML = totalCalls.toFixed(2);
    totalSmsElement.innerHTML = totalSms.toFixed(2);
    radioTotal.innerHTML = costTotal.toFixed(2);
     console.log(callsSettings)
     console.log(smsSettings)
    console.log(radioTotal)

}
radioBillButton.addEventListener('click', billSetting);

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
