// Event listeners
// document.getElementById("my-title").addEventListener('click', () => {
//     const nombre = prompt("Cual es tu nombre?")
//     console.log("Nombre ===>", nombre)
//   })
  

// /**
//  * Ejercicio 1
//  * 1.- Sobre el label de globo
//  * 2.- usando event listeners, inflar el globo
//  * Tiempo: 5min
//  */

  const labelGlobo = document.getElementById("globo")
  let ballonSize = 10
 
 labelGlobo.addEventListener('click', () => {
   // ballonSize = ballonSize + 5
    ballonSize += 5
   console.log("Llamando globo", ballonSize)
    // labelGlobo.style.fontSize = ballonSize + "px"
   // labelGlobo.style.fontSize = `${ballonSize}px`
    labelGlobo.style.cssText = `cursor: pointer; font-size: ${ballonSize}px;`
    })
 
//  /**
//   * Ejercicio 2
//   * 1.- Sobre un nuevo event listener
//   * 2.- escoger en un nuevo mouse event y decrementar el tamaño de mi globo
//   * Tiempo: 
//   */
//   labelGlobo.addEventListener('dblclick', () => {
//     // ballonSize = ballonSize - 5
//     ballonSize -= 5
//     console.log("Llamando globo", ballonSize)
//     // labelGlobo.style.fontSize = ballonSize + "px"
//     // labelGlobo.style.fontSize = `${ballonSize}px`
//     labelGlobo.style.cssText = `cursor: pointer; font-size: ${ballonSize}px;`
//   })

  /**
 * Tarea
 * 1.- Usando la misma clase con el metodo de calcular IMC que se llevaron de tarea
 *    a.- Importar el archivo de POO para que no tengan que re-escribir codigo
 *
 * 2.- Agregar el resultado en una etiqueta H2
 *    a.- El resultado debe tener una etiqueta: "Estás en tu peso ideal", "E"
 *    c.- El resultado podría ser: "25.5 tienes sobre-peso" o "24 estás en tu peso ideal"... inventar los textos
 * 
 * 3.- Cada que haya un cambio el valor y la etiqueta debe ser actualizada
 * 
 * 4.- Dudas o preguntas ponerlas en el mismo thread que Jeniffer puso en slack
 * 
 * 5.- Utilizar controles de flujo para mostrar las etiquetas (Ifs, if else, else if etc)
 */
  
  /**
 * Como sacar valores de los inputs?
 */

const altura = document.getElementById("height")
const peso = document.getElementById("weight")
const resultText = document.getElementById("result-addition")

let valueAltura = 0
let valuePeso = 0

altura.addEventListener("input", (event) => {
  // valueAltura = +event.target.value
  valueAltura = Number(event.target.value)
  console.log("Event ==>", valueAltura)
  resultText.textContent = valueAltura + valuePeso
})

peso.addEventListener("input", (event) => {
  valuePeso = Number(event.target.value)
  console.log("Event ==>", valuePeso)
  resultText.textContent = valueAltura + valuePeso
})