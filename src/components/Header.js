import React from 'react';
import cart from '../cart.jpg';

const Header = ({ cartData }) => {
    console.log("Header", cartData.length);
    return (
        <div className="add-to-cart">
            <span className="cart-count">{cartData.length}</span>
            <img src={cart} alt="Shopping cart icon" />
        </div>
    );
};


export default Header;
