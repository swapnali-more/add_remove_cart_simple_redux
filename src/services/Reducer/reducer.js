import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

const intitialState = {
    cartData: []
}

export default function cartReducer(state=[], action) {
    switch(action.type) {
        case ADD_TO_CART:
            //console.log("Reducer", action)
            return [
                ...state,
                {cartData: action.data}
            ]
            break;
        case REMOVE_TO_CART:
                //console.log("Reducer", action)
            state.pop();
            return [
                ...state,
            ]
            break;
        default:
            return state;
    }
}