/*Ejercicio 1

*/

/*
var array1 = 2



const arrayMulti = (array2) => {

     array2 = array2*2
    return array2
}

arrayMulti(array1)

console.log(array2)*/


/**
 * Ejercicio 2
 * 1.- hacer que el object que retorne la función y  no mute el input original
 * Tiempo: 15min
 */

//  const myObj = {
//     name: "Bryan"
//   }

//   console.log("Before setProp ===>", myObj)

//   // Reference
//   const setProp = (myNewObj) => {

//    myNewObj.hobbies: ['read, 'walk']

//    } 

//     return myNewObj
//   }

//   setProp(myObj)


//   console.log("After setProp ===>", myNewObj)

//   console.log("After setProp ===>", myObj)

/**
 * Ejercicio Tarea
 *  Ejemplo de arreglo: [15, 500, 95, 87, 34, 76]
 * 1.- Crear una función que retorne un arreglo iterado por un map que devuelva el numero al cuadrado
 * 2.- Crear una función que retorne los numeros impares de la respuesta de la función anterior
 * 3.- Crear una función que sume los numeros impares y devuelva la raíz cuadrada del resultado
 * IMPORTANTE: Tarea para el martes
 */


// MAP 
const array1 = [15, 500, 95, 87, 34, 76]

const array2 = array1.map(function (num) {
  return Math.pow(num, 2)
})

console.log('resultMap (array1 al cuadrado) ===>', array2)

// FILTER

const array3 = array2.filter((num1) => {
  if (num1 % 2 == !0) {
    return num1
  }
})

console.log("resultFilter (array2 filtro de números impares) ===>", array3)

// REDUCE

function array4(arrayx) {
  const array5 = arrayx.reduce(function (a, b) {

    return a + b
  })
  return Math.sqrt(array5)
}


array4(array3)
console.log("resultReduce (array3 suma y raiz^2) ===>", array4)


//Deberia de dar:
lastResult2 = Math.sqrt(16819)
console.log(lastResult2)