// For y Arreglos

// for ( let i = 1; i < 11; i++){
//     for (let j = 1; j <= 10; j++){

//         var mult = i * j
//         console.log(mult)
//     }
// }


// Manera de acceder usando un for
// const num = [1, 2, 'Hola', 4, 'mundo']

// for (let i = 0; i < num.length; i++) {
//     console.log(i)

// }

// Manera de acceder e imprimir usando un for


// for (let j = 0; j < num.length; j++) {
//     console.log(num[j])

// }

// Manera de acceder a imprimir el valor
// console.log(num[2], num[4])

//Las funciones se pueden escribir de dos formas.

// const num = [1, 2, 3, 4, 5]
// const names = ['Brendas', 'Brika', 'Osvaldo', 'Bardack' ]

// function iterar(arg1) {// cuando se ingresa a la funcion se le conoce argumento a lo que esta dentro de los ()

//     for (let j = 0; j < arg1.length; j++) {
//         console.log(arg1[j])

//     }
// }

// iterar(num) // cuando se invoca a la funcion se le conoce como parametros a lo que esta dentro de los ()
// iterar(names)

// function suma (a, b){
//     return resultF = a + b
// }
//al momento de utilizar un return debemos asignar el contenido a un const
// const result1 = suma(2,4)
// const result2 = suma(4,6)
// const result3 = suma(result1, result2)

// console.log('Resultado:', result3)

//Callbacks
// resta(15, 5, callback)

// function resta(a,b, cd){
//     const r = a - b
//     cd(r)

// }

// function callback(r2){
// console.log('Resultado:',r2 )

// }

//Fat Arrow Function: existen dos distintas maneras de excribirlas. (las funciones que llevan escrito function antes se llaman nombradas)

// const miFatArrowFunction = (a,b) => a + b
// const r3=miFatArrowFunction(2,3)
// console.log(r3)

// const miOfatAfuction = (a,b) =>  {
//     return a + b
// }

// const r4 = miOfatAfuction (5,6)
// console.log(r4)

//Funciones Anonimas: función sin nombre (se usan cuandoserán utilizadas en un contexto en particular)

function sumar(a, b, cd) {
    const r = a + b
    cd(r)
}

sumar(2, 3, function (r5) {
    console.log('Soy un afunción anomima y mi resultado es:', r5)
})