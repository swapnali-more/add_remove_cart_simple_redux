import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

// Define the initial state of the cart as an empty array
export default function cartReducer(state = [], action) {
    const { type, data } = action;

    // Check the type of action and update the state accordingly
    switch (type) {
        // If the action is to add an item to the cart, add the item to the state array
        case ADD_TO_CART:
            return [...state, data];
        // If the action is to remove an item from the cart, remove the last item in the array
        case REMOVE_TO_CART:
            return state.slice(0, -1);
        // If the action type is not recognized, return the current state
        default:
            return state;
    }
}


