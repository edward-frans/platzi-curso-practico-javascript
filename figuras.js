// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();



// Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, "
//     + baseTriangulo 
//     + "cm"
// );
// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo);

function perimetroTriangulo (lado1, lado2, base) {
    return parseFloat(lado1 + lado2 + base);
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo*alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();



// Código del circulo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
// const PI = 3.1415;
const PI = Math.PI;
// console.log("PI es: " + PI + "cm");

// Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo (radio) {
    return  (radio * radio) * PI;
}

console.groupEnd();


// ---

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Aquí interactuamos con el HTML
function calcularPerimetroTriangulo (){
    const input1 = document.getElementById("InputTrianguloA");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloB");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo (){
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = Number(input3.value);
    const input4 = document.getElementById("InputTrianguloAltura");
    const value4 = Number(input4.value);

    const area = areaTriangulo(value3, value4);
    alert(area);
}

// Aquí interactuamos con el HTML
function calcularPerimetroCirculo (){
    const input5 = document.getElementById("InputCirculoRadio");
    const value5 = Number(input5.value);

    const perimetro = perimetroCirculo(value5);
    alert(perimetro);
}

function calcularAreaCirculo (){
    // const input = document.getElementById("InputCirculo");
    // const value = input.value;
    const input5 = document.getElementById("InputCirculoRadio");
    const value5 = input5.value;

    const area = areaCirculo(value5);
    alert(area);
}
