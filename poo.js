//Programación orientada a objetos 
//Sesión 5

//Modelos y paradigmas 

//Programación imperativa : POO
// Describe paso a paso un conjunto de instrucciones para solucionar un problema. 

// class define y crea una clase.




/**
 * Ejercicio 1
 * 1.- Crear una clase personal
 * 2.- Un metodo que salude con nuestro nombre
 * 3.- Un metodo que diga que edad tenemos
 */

/*
class Humano {
    constructor (name, age,){
        this.name = name
        this.age = age
        this.countersaludo = 0
    }

    saludo(){
        this.countersaludo++
        return `Hola me llamo ${this.name}`
    }

    edad(){

        return `Tengo ${this.age} años` 
    }

    

    get obtenersaludo() {
        return this.countersaludo
      }
}
    


  const Osvaldo = new Humano ("Osvaldo", "24")
  const Rodolfo = new Humano ("Rodolfo", "27")
  
 
  console.log( Osvaldo.saludo())
  console.log( Osvaldo.saludo())
  console.log( Osvaldo.saludo())
  console.log( Rodolfo.saludo())
  console.log( Rodolfo.saludo())
  
  console.log("Valor de logins de saludo de Osvaldo ===>", Osvaldo.obtenersaludo)
  console.log("Valor de logins de saludo de Rodolfo ===>", Rodolfo.obtenersaludo)
  */


//Programación declarativa : Programación funcional 
//Esta basado en funciones. 


/*Ejercicio de llantera

class CarFeatures {
    constructor(model, year, noserie, motor) {
        this.model = model
        this.year = year
        this.noserie = noserie
        this.motor = motor
        
    }
     
    
    
    generalFeatures() {
        return `Las caracteristicas del carro son las siguientes: ${this.model} , ${this.year} , ${this.noserie} , ${this.motor}`
    }

    
}


class Llantas extends CarFeatures {
    constructor(brand, width, height, type, rin, count, model, year, noserie, motor) {
        super(model, year, noserie, motor)
        this.brand = brand
        this.width = width
        this.height = height
        this.type = type
        this.rin = rin
        this.count = count
        this.costumerpurchase = 0
    }

    ordenDepedido() {
        this.costumerpurchase++ 
        return `Marcada de la llanta ${this.brand}, Ancho: ${this.width}, Alto ${this.height}, Tipo ${this.type}, Rin ${this.rin}, número de compra ${this.costumerpurchase}`
        
    }



    cantidad() {

        return `Cantidad: ${this.count}`
    }


    //get obtenerNoDecompra() {
     //         return this.costumerpurchase
   // }
     
}

const Michelin = new Llantas("Michelin", "185", "60", "R", "15", "2", "Jetta", "2015", "5200", "2.0L")

const Bfgood = new Llantas("Bfgood", "200", "55", "R", "22", "4", "CRV", "2021", "18999", "2.5L")


console.log(Michelin.generalFeatures())
console.log(Michelin.ordenDepedido())
console.log(Michelin.cantidad())

console.log(Michelin.generalFeatures())
console.log(Michelin.ordenDepedido())
console.log(Michelin.cantidad())

console.log(Michelin.generalFeatures())
console.log(Michelin.ordenDepedido())
console.log(Michelin.cantidad())

//console.log("Número de compra====>", Michelin.obtenerNoDecompra)
 
console.log(Bfgood.generalFeatures())
console.log(Bfgood.ordenDepedido())
console.log(Bfgood.cantidad())

//console.log("Número de compra====>", Bfgood.obtenerNoDecompra)

*/


/**
 * Tarea 
 * Ejercicio 3
 * 1.- Crear una clase padre
 * 2.- Extenderla a la clase hijo
 * 3.- Ejecutar un metodo de la clase padre en la clase hijo
 * 4.- Calcular la masa corporal en la clase padre y retornar el resultado
 */

// Clase padre
class Certificadomedico {
    constructor(height, weight,genre) {
      this.height = height
      this.weight = weight
      this.genre = genre
      
    }
  
    tituloDelcertificado() {
      return "CERTIFICADO MEDICO"
    }

    imc(){
        return `Masa corporal actual: ${(this.weight)/(this.height*this.height)}` 
    }
  }

  // Clase hijo
  class Person extends Certificadomedico{

    constructor (name, age, height, weight, genre) {
      // Solo cuando se extiende de una clase debemos usar super
      super(height, weight,genre)
      this.name = name
      this.age = age
    }
  
    // Incrementar el valor cada vez que se llame
   

    nombre() {
      return `Nombre: ${this.name}`
    }
  
    edad() {
      
      const actualYear = new Date().getFullYear()
      const birthYear = new Date(this.age).getFullYear()
  
      return `${actualYear - birthYear} años`
    }
    altura() {
        return `Altura ${this.height}`
      }
    peso() {
        return `Peso ${this.weight}`
      }
    genero() {
        return `Genero ${this.genre}`
      }

  }

  const Osvaldo = new Person ("Osvaldo", "02/09/1996", 1.71, 76, "M")
  
  console.log(Osvaldo.tituloDelcertificado())
  console.log(Osvaldo.nombre())
  console.log(Osvaldo.edad()) 
  console.log(Osvaldo.altura()) 
  console.log(Osvaldo.peso()) 
  console.log(Osvaldo.imc())
  console.log(Osvaldo.genero())


  