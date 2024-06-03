import Filter from "./Filter.js";

class FilterMake extends Filter{
    constructor(make){
        super()
        this.make = make;
    }

    print(){
        console.log(this.make)
    }

    getParam(){
        return this.make;
    }

    applyFilter(arrayCars){
        let copy = [...arrayCars];
        return copy.filter(car => car.make === this.make)
    }
}

export default FilterMake