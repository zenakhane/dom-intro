var calculateBtn = document.querySelector('.calculateBtn')
//get a reference to the calculate button
var billTotalElement = document.querySelector(".billTotal");
var theTotalBill= document.querySelector(".billTotal")
//get a reference to the billTotal element
var billStringElement = document.querySelector(".billString");
var colorElement1 = document.querySelector(".total")
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

        if (billTotal < 20 ){
            colorElement1.classList.remove("total" || "warning");
            billTotalElement.classList.remove("warning");
            colorElement1.classList.remove("total" || "danger");
            billTotalElement.classList.remove("danger");
            console.log(colorElement1)

        }
        if (billTotal >= 20 && billTotal < 30){ 
            colorElement1.classList.add("warning");
            billTotalElement.classList.add("warning");
            console.log(colorElement1)
        }
        else if (billTotal >= 30){
            billTotalElement.classList.remove("warning");
            colorElement1.classList.remove("total" || "warning");

            billTotalElement.classList.add("danger");
            colorElement1.classList.add("danger");
            console.log(colorElement1)
            
        }

    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
    console.log(roundedBillTotal)
}

calculateBtn.addEventListener('click',  calculateBtnClicked)
