var isTriangleButton  = document.querySelector("#btn-isTriangle")
var inputs = document.querySelectorAll(".angle");
var output = document.querySelector("#output");
console.log(inputs);
function sumOfAngles(angle1, angle2, angle3){
    console.log(angle1 + angle2 + angle3);
    return angle1 + angle2 + angle3;
}

function isTriangle(){

    if(inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == ""){
        output.innerText = "All fields are mandatory";
        return;
    }

    if(inputs[0].value < 0 || inputs[1].value < 0 || inputs[2].value < 0){
        output.innerText = "Only positive values are allowed";
        return;
    }
    
    console.log(Number(inputs[0]), Number(inputs[1]), Number(inputs[2]));

    const sumOfAngleValue = sumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

   
    if(sumOfAngleValue === 180){
        console.log("Yeah! This is a triangle");
        output.innerText = "Yeah! This is a triangle";
    } else{
        console.log("Oh! sorry this is not a triangle");
        output.innerText = "Oh! sorry this is not a triangle";
    }
}


isTriangleButton.addEventListener('click', isTriangle);
