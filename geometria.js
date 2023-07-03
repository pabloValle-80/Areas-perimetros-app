//cuadrado//

const periSquare = (side) => side * 4;
const areaSquare = (side) => side * side;

function calculatePerimSquare() {
  let inputSide = document.getElementById("inputSide");
  let value = Number(inputSide.value);

  const result = `El perimetro del cuadrado es: ${periSquare(value)} cm`;
  document.getElementById("result").innerText = result;
}

function calculateAreaSquare() {
    let inputSide = document.getElementById("inputSide");
    let value = Number(inputSide.value);
  
    const result = `El area del cuadrado es: ${areaSquare(value)} cm2`;
    document.getElementById("result").innerText = result;
  }

//triangulo//

const periTri = (side1, side2, side3) => side1 + side2 + side3;
const areaTri = (base, altura) => (base * altura) / 2;

function calculatePerimTri() {
    let inputSide1 = document.getElementById('side1');
    side1 = Number(side1.value);
    let inputSide2 = document.getElementById('side2');
    side2 = Number(side2.value);
    let inputSide3 = document.getElementById('side3');
    side3 = Number(side3.value);

    const result = `El perimetro del triangulo es: ${periTri(side1, side2, side3)} cm`;
    document.getElementById("result").innerText = result;
}

function calculateAreaTri() {
    let base = document.getElementById("inputBase");
    side1 = Number(inputBase.value);

    let altura = document.getElementById("inputAltura");
    side2 = Number(inputAltura.value);
  
    const result = `El area del triangulo es: ${areaTri(side1, side2)} cm2`;
    document.getElementById("result").innerText = result;
  }

//circulo//

  const diametro = (radio) => radio * 2;
  const periCircle= (radio) => diametro(radio) * Math.PI;
  const areaCircle = (radio) => (radio * radio) * Math.PI;

  function calculateDiametro() {
    let inputRadio = document.getElementById("inputRadio");
    let value = Number(inputRadio.value);
  
    const result = `El diametro del circulo es: ${diametro(value)} cm`;
    document.getElementById("result").innerText = result;
  }

  function calculatePerimCircle() {
    let inputRadio = document.getElementById("inputRadio");
    let value = Number(inputRadio.value);
  
    const result = `El perimetro de la circunsferencia es: ${periCircle(value)} cm`;
    document.getElementById("result").innerText = result;
  }

  function calculateAreaCircle() {
    let inputRadio = document.getElementById("inputRadio");
    let value = Number(inputRadio.value);
  
    const result = `El area del circulo es: ${areaCircle(value)} cm2`;
    document.getElementById("result").innerText = result;
  }




