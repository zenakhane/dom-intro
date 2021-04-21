var calculateBtn = document.querySelector('.calculateBtn')
//get a reference to the calculate button
var billTotalElement = document.querySelector(".billTotal");
var theTotalBill= document.querySelector(".billTotal")
//get a reference to the billTotal element
var billStringElement = document.querySelector(".billString");

//get a reference to the billString

function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringElement.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
            
        if (billTotal >= 20 && billTotal < 30){
            
            billTotalElement.classList.add("warning");
        }
        else if (billTotal >= 30){
            billTotalElement.classList.remove("warning");
            billTotalElement.classList.add("danger");
            
        }

    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
    console.log(roundedBillTotal)
}

calculateBtn.addEventListener('click',  calculateBtnClicked)
