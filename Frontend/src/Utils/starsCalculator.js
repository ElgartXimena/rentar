import { filledstar, halfstar, emptystar } from "../assets";

const getStarArray = ({carItem}) => {
    let rate = 1;
    let stars = [];
    while (rate < carItem.rating){
        stars.push(filledstar);
        rate++;
    }
    let emptystars = 5 - carItem.rating;
    carItem.rating !== Math.trunc(carItem.rating) ? (stars.push(halfstar), emptystars--) : null;
    while (emptystars > 0){
        stars.push(emptystar);
        emptystars--;
    }
    return stars;
}

export { getStarArray }