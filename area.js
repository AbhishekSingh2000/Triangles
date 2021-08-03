var s1  = document.querySelector("#side1");
var s2 = document.querySelector("#side2");
var s3 = document.querySelector("#side3");
var ca1 = document.querySelector("#cala1");
var b = document.querySelector("#base");
var h = document.querySelector("#height");
var ca2 = document.querySelector("#cala2");
var angl = document.querySelector("#angle");
var firsts = document.querySelector("#f");
var seconds = document.querySelector("#s");
var ca3 = document.querySelector("#cala3");
var op1 = document.querySelector("#output1");
var op2 = document.querySelector("#output2");
var op3 = document.querySelector("#output3");

ca1.addEventListener("click", calArea1);
ca2.addEventListener("click", calArea2);
ca3.addEventListener("click", calArea3);


function calArea1(){
    if(s1.value==""||s2.value==""||s3.value==""||s1.value=="0"||s2.value=="0"||s3.value=="0"){
        op1.innerHTML="Please enter appropriate data to calculate area";
    }
    else{
        var semip= (parseInt(s1.value) + parseInt(s2.value) + parseInt(s3.value))/2;

        var area= Math.sqrt(semip*(semip-parseInt(s1.value))*(semip-parseInt(s2.value))*(semip-parseInt(s3.value)));

        op1.innerHTML=`The area of the triangle is: <strong>${area.toFixed(3)} unit<sup>2</sup></strong>`;
    }

}


function calArea2(){
    if(b.value==""||h.value==""||b.value=="0"||h.value=="0"){
        op2.innerHTML="Please enter appropriate data to calculate area";
    }
    else{
        var area= (parseInt(h.value)*parseInt(b.value))*0.5;
        op2.innerHTML=`The area of the triangle is: <strong>${area.toFixed(3)} unit<sup>2</sup></strong> `;
    }
}


function calArea3(){
        if(firsts.value=="0"||firsts.value==""||seconds.value=="0"||seconds.value==""||angl.value=="0"||angl.value==""){
            op3.innerHTML="Please enter appropriate data to calculate area";
        }
        else{
            console.log(firsts.value);
            console.log(seconds.value);
            console.log(angl.value);
            var area = (parseInt(firsts.value)*parseInt(seconds.value))*(Math.sin(angl.value*(Math.PI/180)));
            console.log(area);
            op3.innerHTML=`The area of the triangle is: <strong>${area.toFixed(3)} unit<sup>2</sup></strong> `;
        }
}