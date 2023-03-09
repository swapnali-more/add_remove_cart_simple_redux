import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

// Creating and exporting the addToCart action creator
export const addToCart = data => ({
    type: ADD_TO_CART, // Setting the action type
    data // Setting the action data
});

// Creating and exporting the removeToCart action creator
export const removeToCart = () => ({
    type: REMOVE_TO_CART // Setting the action type
});
