const inputBaseHeight = document.querySelectorAll('.input-base-height');
const areaButton = document.querySelector('#btn-area');
const outputAreaElement = document.querySelector('#output-area');

function calculateTriangleArea() {
    if(inputBaseHeight[0].value == "" || inputBaseHeight[1].value == ""){
        outputAreaElement.innerText = "All fields are mandatory";
        return;
    }

    if(inputBaseHeight[0].value < 0 || inputBaseHeight[1].value < 0){
        outputAreaElement.innerText = "Only positive values are allowed";
        return;
    }

    console.log(Number(inputBaseHeight[0].value), Number(inputBaseHeight[1].value));
    const areaOfTriangle = 0.5 * (Number(inputBaseHeight[0].value) * Number(inputBaseHeight[1].value));
    console.log(areaOfTriangle);
    outputAreaElement.innerText = "The area of the triangle is " + areaOfTriangle.toFixed(2) + " cm²";
}


areaButton.addEventListener('click', calculateTriangleArea);