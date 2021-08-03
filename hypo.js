var s1= document.querySelector("#side1");
var s2= document.querySelector("#side2");
var btn= document.querySelector("#btnside");
var op= document.querySelector("#outputh");

function findHypo(){
    if(s1.value==""||s2.value==""){op.innerHTML="Enter the length of all sides appropriately"}
    else{
        var s3= Math.sqrt((s1.value*s1.value)+(s2.value*s2.value));
    console.log(s3);
    op.innerHTML= `The Length of 3rd Side of triangle is: <strong>${s3.toFixed(2)} units</strong>`;
    }
}


btn.addEventListener("click",findHypo);
