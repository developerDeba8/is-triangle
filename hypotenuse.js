const inputSides = document.querySelectorAll('.input-side-lenght');
var checkHypotenuseButton = document.querySelector('#btn-hypotenuse');
const outputHypotenuseElement = document.querySelector('#output-hypotenuse');

function calculateSumOfSquares(length1, length2){
    return length1*length1 + length2*length2;
}

function calculateHypotenuse(){
    if(inputSides[0].value == "" || inputSides[1].value == ""){
        outputHypotenuseElement.innerText = "All fields are mandatory";
        return;
    }

    if(inputSides[0].value < 0 || inputSides[1].value < 0){
        outputHypotenuseElement.innerText = "Only positive values are allowed";
        return;
    }

    const sumOfSquares = calculateSumOfSquares(Number(inputSides[0].value), Number(inputSides[1].value));
    const hypotenuseLength = Math.sqrt(sumOfSquares).toFixed(2);
    outputHypotenuseElement.innerText = "The length of the hypotenuse is " + hypotenuseLength + " cm";
}

checkHypotenuseButton.addEventListener('click', calculateHypotenuse);