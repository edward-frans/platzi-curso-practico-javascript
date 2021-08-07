function alturaTriangulo (lado1, lado2, base){
    if (lado1 == lado2 && lado1!=base) {
        const altura = Math.sqrt(lado1**2 - base**2/4);
        return altura;
    } else {
        return alert("Las medidas no son las de un triangulo isosceles");
    }
}


function calcularAlturaTriangulo (){
    const input1 = document.getElementById("InputTrianguloA");
    const lado1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloB");
    const lado2 = Number(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const base = Number(input3.value);

    const alturaIso = alturaTriangulo(lado1, lado2, base);
    alert(alturaIso);
}