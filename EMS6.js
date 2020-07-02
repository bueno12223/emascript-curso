// CLASES
class calculator {
    constructor () {
    // aqui asignamos las variables disponibles en un scope global con this
    this.valorA = 0
    this.valorB = 0
    }
    sumar(valor1, valor2){
        // ponemos que es cada variable dentro de la funcion en this
        this.valorA = valor1
        this.valorB = valor2
        return valor1 + valor2;
    }
}
// importante guardarlo dentro de una funcion
const cacl = new calculator()
cacl.sumar(1,1)



// LOS MODULOS
// son fracciones de codigo 
// puedes exportar o importar modulos de donde los nesecites
// PARA IMPORTAR
export default funcionX

// para importar
import { funcionX } from "index"



