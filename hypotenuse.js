const inputSides = document.querySelectorAll('.input-side-lenght');
var checkHypotenuseButton = document.querySelector('#btn-hypotenuse');
const outputHypotenuseElement = document.querySelector('#output-hypotenuse');

function calculateSumOfSquares(length1, length2){
    return length1*length1 + length2*length2;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(inputSides[0].value), Number(inputSides[1].value));
    const hypotenuseLength = Math.sqrt(sumOfSquares);
    outputHypotenuseElement.innerText = "The length of the hypotenuse is " + hypotenuseLength + " cm";
}

checkHypotenuseButton.addEventListener('click', calculateHypotenuse);