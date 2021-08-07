// const lista1 = [
//     1,
//     2,
//     5,
//     7,
//     3,
//     4,
//     3,
//     2,
//     9,
//     7,
//     3,
//     3,
//     5,
// ];

// A partir de aqui es mi codigo pero por alguna razon me sale undefined, y te juro que estoy harto no encuentro
// que esta mal asi que fue, asi que voy a cojer el codigo de alguien mas y tratar de leerlo mil veces para ver
// como funciona su codigo

// const lista = [
//     1,
//     3,
//     3,
//     3,
//     2,
// ];

// function moda(lista) {
//     const lista1Count = {};
//     lista = Object.values(Array);
//     lista.map(
//         function(elemento){
//             if(lista1Count[elemento]) {
//                 lista1Count[elemento] += 1;
//             } else {
//                 lista1Count[elemento] = 1;
//             }
//         }
//     );
//     console.log(lista);
    
//     const lista1Array = Object.entries(lista1Count).sort(
//         function (elementoA, elementoB) {
//             return elementoA[1] - elementoB[1];
//         }
//     );
    
//     const moda = lista1Array[lista1Array.length - 1];
//     return moda;
// }

// Aqui termina mi codigo

// Aqui empieza el codigo del otro

const lista4 = [1,1,2,2,3,3,4,4,3]
function moda2(lista) {
    const listaObj = {};
    //Le otrogamos key y value al objeto
    lista.map(
        function(e) {
            if(listaObj[e]) {
                listaObj[e] += 1;
            } else {
                listaObj[e] = 1;
            }
        }
    );
    //Creamos un multiarray ordenado
    const listaArray = Object.entries(listaObj).sort(
        function (eA, eB) {
            return eA[1] - eB[1];
        }
    );
    //inicializo la variable mayor para tomar de referencia
    let mayor = listaArray[listaArray.length-1][1]
    let confirmacion = []
    let moda = []
    //Confirmo si existe o no exite moda
    for (let i = 0; i < listaArray.length; i++) {
        if (!confirmacion.includes(listaArray[i][1])) {
            confirmacion.push(listaArray[i][1])
        }  
    }
    if (confirmacion.length == 1) {
        //Si no existe moda aqui termina la función
        console.log(`No hay moda`);
    }else{
        //Recorro el array para saber si existe mas de una moda
        listaArray.map((el) =>{
            if (el[1] == mayor) {
                moda.push(el[0])
            }
        })
        //Finalmente imprimo mensaje dependiendo de la cantida de moda que haya
        if (moda.length == 1) {
            console.log(`La moda es ${moda}`);
        }else{
            let texto = ""
            for (let i = 0; i < moda.length; i++) {
                texto += moda[i]+" "
            }
            console.log(`La moda es: ${texto}`);
        }
    }
    
};
