var a1= document.querySelector("#angle1");
var a2= document.querySelector("#angle2");
var a3= document.querySelector("#angle3");
var btn= document.querySelector("#btncheck");
var op= document.querySelector("#outputp");

btn.addEventListener("click",()=>{
    if(a1.value==""||a2.value==""||a3.value==""||a1.value=="0"||a2.value=="0"||a3.value=="0"){
        op.innerHTML="Enter all the 3 angles correctly please.";
    }
    else{
        var sum= parseInt(a1.value) + parseInt(a2.value) + parseInt(a3.value);
        console.log(sum);
        if(sum<=180){
            op.innerHTML=`${a1.value}<sup>0</sup>, ${a2.value}<sup>0</sup> and ${a3.value}<sup>0</sup> is a <strong>PERFECT</strong> combination of angles to make a triangle as their sum is less than or equal to 180<sup>0</sup>`;
        }
        else if(sum>180){
            op.innerHTML=`${a1.value}<sup>0</sup>, ${a2.value}<sup>0</sup> and ${a3.value}<sup>0</sup> is a <strong>WRONG</strong> combination of angles to make a triangle as their sum is more than 180<sup>0</sup>`;
        }
    }
});

