
 /**
  * Ejercicio 2
  * 1,- Vamos a crear condiciones usando if y utilizando cda uno de los operadores logicos (8)
  * 2.- Crear condiciones con 3 truthys y 3 falseys (6)
  * Tiempo 15 min.
  */




 if (5 == '5') {
     console.log(' 5 es igual a 5 , true')
 } else {
     console.log(' Son distintos  , false')
 }


 if (5 != '6') {
     console.log(' 5 es diferente de 6 , true')
 } else {
     console.log(' Son iguales , false')
 }

 if (3 === '3') {
     console.log(' 3 es igual a 3 y del mismo tipo de variable , true')
 } else {
     console.log('No son iguales en valor o en tipo de variable, false')
 }

 if (3 !== '4') {
     console.log(' 3 es diferente a 4 , true')
 } else {
     console.log('Son iguales en valor o en tipo de variable, false')
 }

 if (3 >= '3 ') {
     console.log('3 es mayor o igual a 3, True')
 } else {
     console.log('Es menor, false')
 }

 if (3 < '4 ') {
     console.log('3 es menor a 4 ,True')
 }

 if (4 > '3 ') {
     console.log('4 es mayor a 3, True')
 }

 if (3 <= '3 ') {
     console.log('3 es menor o igual a 3, True')
 } else {
     console.log('Es mayor, false')
 }


 // Truthy
 // var myNumber = -10
 // var myNumber = 20
 // var myNumber = "Hola Mundo"
 // var myBolean = true
 // var myObject = {nombre: "Bryan"}
 // var myObject = {}
 // var myArray = [1,2,3]
 // var myArray = []


 // Falsey 
 // var myNumber = 0
 // var myString = ""
 // var myBolean = false
 // var myUndefined = undefined
 // var myNull = null
 // var myNan = NaN
 var ficha = 10
 var edad = 24
 var nombre = 'Osvaldo'
 var vacunado = false
 var cantidadDevacunas = 0
 var comentarios = 'Aun eres un chico'

 if (ficha) {
     console.log(ficha)
 } else {
     console.log( 'Falsey')
 }

 if (edad) {
     console.log (edad )
 } else {
     console.log("Falsey")
 }

 if (nombre) {
     console.log(nombre )
 } else {
     console.log("Falsey")
 }
 if (vacunado) {
     console.log("Truthy")
 } else {
     console.log("Falsey")
 }
 if (cantidadDevacunas) {
     console.log("Truthy")
 } else {
     console.log("Falsey")
 }
 if (comentarios) {
     console.log( comentarios)
 } else {
     console.log("Falsey")
 }
 /**
  * Ejercicio 3
  * 1.- 
  * 2.- 
  * Tiempo 15 min.
  */


 var color = 'Negro'

 switch (color) {
     case 'Rojo':
         console.log('El color es Rojo')
         break
     case 'Azul':
         console.log('El color es Azul')
         break
     case 'Amarillo':
         console.log('El color es Amarillo')
         break
     case 'Morado':
         console.log('El color es Morado')
         break
     case 'Rosa':
         console.log('El color es Rosa')
         break
     case 'Negro':
         console.log('El color es Negro')
         break

     default:
         console.log('El color es blanco')
 }