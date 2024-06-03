import Filter from "./Filter.js";

class LowToHigh extends Filter{
    constructor() {
        super()
        this.order = 'Price low to high'
    }

    getParam(){
        return this.order;
    }

    applyFilter(arrayCars){
        // Hacer una copia superficial del array para evitar modificar el original
    let copy = [...arrayCars];
    return copy.sort((car1, car2) => car1.price - car2.price);
    }

}

export default LowToHigh