const inputBaseHeight = document.querySelectorAll('.input-base-height');
const areaButton = document.querySelector('#btn-area');
const outputAreaElement = document.querySelector('#output-area');

function calculateTriangleArea() {
    console.log(Number(inputBaseHeight[0].value), Number(inputBaseHeight[1].value));
    const areaOfTriangle = 0.5 * (Number(inputBaseHeight[0].value) * Number(inputBaseHeight[1].value));
    console.log(areaOfTriangle);
    outputAreaElement.innerText = "The area of the triangle is " + areaOfTriangle + " cm²";
}


areaButton.addEventListener('click', calculateTriangleArea);