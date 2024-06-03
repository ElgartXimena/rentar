import Filter from "./Filter.js";

class HighToLow extends Filter{
    constructor() {
        super()
        this.order = 'Price high to low'
    }

    getParam(){
        return this.order;
    }

    applyFilter(arrayCars){
        // Hacer una copia superficial del array para evitar modificar el original
    let copy = [...arrayCars];
    return copy.sort((car1, car2) => car2.price - car1.price);

    }

}

export default HighToLow