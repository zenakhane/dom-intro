 var billType = document.querySelector(".billItemTypeSettings")
// get a reference to the sms or call radio buttons
 var callsSettings = document.querySelector(".callCostSetting")
 var smsSettings = document.querySelector(".smsCostSetting")
 var warningSettings = document.querySelector(".warningLevelSetting")
var criticalSettings = document.querySelector(".criticalLevelSetting")
// get refences to all the settings fields
 var radioBillButton = document.querySelector(".radioBillAddBtnSet")
//get a reference to the add button
var radioUpdateButton = document.querySelector(".updateSettings")
//get a reference to the 'Update settings' button
var callSettingTotal = document.querySelector(".callTotalSettings")
var smsSettingTotal = document.querySelector(".smsTotalSettings")
var SettingTotal = document.querySelector(".totalSettings")
//  get a reference to the settings total
var radioSettings = 0
// create a variables that will keep track of all the settings
var callsTotal = 0
var smsTotal = 0
var radioTotal = 0
// create a variables that will keep track of all three totals.
var setCall = 0
var setSms = 0
var setWarning = 0
var setCritical = 0

function billUpdate(){
    setCall = parseFloat(callsSettings.value);
    setSms = smsSettings.value;
    setWarning = warningSettings.value;
    setCritical = criticalSettings.value;
    // console.log(typeof setCall)
}
radioUpdateButton.addEventListener('click', billUpdate)


function billSetting(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value.trim()
         if(billItemType === "call"){
            callsTotal += setCall; 
           radioTotal += setCall;
        }          
        else if (billItemType === "sms"){
             smsTotal += setSms;
            radioTotal += setSms;
        }
         if ( radioTotal >= 20 ){
        //     // adding the danger class will make the text red
             radioTotal.classList.add("warning");
            
            
         }
         else if (radioTotal >= 30){
            radioTotal.classList.remove("warning");
           
        }
    }
    // update the correct total
    
    //update the totals that is displayed on the screen.
    callSettingTotal.innerHTML = callsTotal.toFixed(2);
    smsSettingTotal.innerHTML = smsTotal.toFixed(2);
    SettingTotal.innerHTML = radioTotal.toFixed(2);
    
}
radioBillButton.addEventListener('click', billSetting);

