import Filter from "./Filter.js";

class TopRatedFirst extends Filter{
    constructor() {
        super()
        this.order = 'Top rated first'
    }

    getParam(){
        return this.order;
    }

    applyFilter(arrayCars){
        // Hacer una copia superficial del array para evitar modificar el original
    let copy = [...arrayCars];
    return copy.sort((car1, car2) => car2.rating - car1.rating);

    }

}

export default TopRatedFirst