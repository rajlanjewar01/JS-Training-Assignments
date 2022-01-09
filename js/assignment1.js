var form = document.querySelector("#frm-1");

form.addEventListener("submit", function(e){
    e.preventDefault();
    var inputAmt = document.querySelector("#amt").value;
    inputAmt = parseInt(inputAmt);
    
});