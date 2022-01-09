var form = document.querySelector("#frm-1");

form.addEventListener("submit", function(e){
    e.preventDefault();
    var inputAmt = document.querySelector("#amt").value;
    inputAmt = parseInt(inputAmt);
    
    //check conditions
    if(inputAmt >= 35){
        var leftAmt = inputAmt - 35;
        alert("Ashish was able to purchase Grossary and Ice Cream and Amount left with him is: (Rs) " + leftAmt);
    }
    else if(inputAmt === 20 || inputAmt < 35){
        alert("Ashish was only able to purchase Grossary with given amount");
    }
    else{
        alert("Ashish wasn't able to purchase due to insufficient amount");
    }
});