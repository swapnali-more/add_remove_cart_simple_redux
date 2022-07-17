import React from 'react';
import cart from "../cart.jpg";

const Header = (props) => {
    console.log("Header",props.cartData.length)
    return (
        <div className="add-to-cart">
            <span className="cart-count">{props.cartData.length}</span>
            <img src={cart} />
        </div>
    )
}

export default Header;
