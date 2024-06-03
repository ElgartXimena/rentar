import Filter from "./Filter.js";

class FilterCategory extends Filter{
    constructor(category){
        super()
        this.category = category;
    }

    print(){
        console.log(this.category)
    }

    getParam(){
        return this.category;
    }

    applyFilter(arrayCars){
        let copy = [...arrayCars];
        return copy.filter(car => car.category === this.category)
    }
}

export default FilterCategory